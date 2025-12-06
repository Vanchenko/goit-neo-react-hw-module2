import style from "./Feedback.module.css";

export default function Feedback({ ratings, totalFeedback, positiveFeedback }) {
	return (
		<ul className={style.feedback}>
			{Object.keys(ratings).map((rating, i) => {
				return (
					<li key={i}>
						<p>
							{rating}: {ratings[rating]}
						</p>
					</li>
				);
			})}
			<li>
				<p>Total: {totalFeedback}</p>
			</li>
			<li>
				<p>Positive: {positiveFeedback}%</p>
			</li>
		</ul>
	);
}