import { Star } from "@mui/icons-material";

function ReviewCard() {
  return (
    <div className="min-h-10 p-6 border-b-2 border-gray-300">
      <span className="align-middle">4.3</span>
      <Star />
      <span className="text-sm ml-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis
        magni totam suscipit, minima
      </span>
      <div className="mt-3">
        <p className="text-sm font-semibold text-gray-500">Alan gomez</p>
        <p className="text-xs text-gray-500">8 months ago</p>
      </div>
    </div>
  );
}

export default ReviewCard;
