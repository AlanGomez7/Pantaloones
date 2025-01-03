import ReviewCard from "../../components/ReviewCard";

function ProductReviews() {
  return (
    <div className=" mt-4">
      <p className="text-4xl">Ratings & Reviews</p>
      {[1, 2, 3, 4, 5, 6, 7].map((ele, idx) => (
        <ReviewCard key={idx} />
      ))}
    </div>
  );
}

export default ProductReviews;
