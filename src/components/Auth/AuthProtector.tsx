import {
  FunctionComponent,
  PropsWithChildren,
  useLayoutEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { API } from "../../api/utils";
import { AxiosError } from "axios";
import { signIn } from "../../redux/slices/authSlice";

const AuthProtector: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [isTokenUpdated, setIsTokenUpdated] = useState(false);
  const token = useSelector((store: RootState) => store.auth.userDetails);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const requestInterceptor = API.interceptors.request.use((config: any) => {
      config.headers.Authorization =
        !config._retry && token?.accessToken
          ? `Bearer ${token.accessToken}`
          : config.headers.Authorization;
      return config;
    });

    return () => API.interceptors.request.eject(requestInterceptor);
  }, [isTokenUpdated]);

  useLayoutEffect(() => {
    const responseInterceptor = API.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (
          error.response?.status === 403 &&
          error.response.statusText === "Forbidden"
        ) {
          try {
            const result = await API.get("/auth/refresh");
            dispatch(signIn(result.data));
            setIsTokenUpdated(true);

          } catch (err) {
            dispatch(signIn(null));
          }
        }
        return Promise.reject(error);
      }
    );

    return () => API.interceptors.response.eject(responseInterceptor);
  });
  return <>{children}</>;
};

export default AuthProtector;
