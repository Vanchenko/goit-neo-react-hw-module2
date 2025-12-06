import style from "./Options.module.css";

export default function Options({
	options,
	totalFeedback,
	updateFeedback,
	resetRating,
}) {
	return (
		<ul className={style.options}>
			{Object.keys(options).map((option, i) => {
				return (
					<li key={i}>
						<button className={style.options_button}
							onClick={() => {
								updateFeedback(option);
							}}
						>
							{option}
						</button>
					</li>
				);
			})}
			{totalFeedback ? (
				<li >
					<button className={style.reset_btn} onClick={() => resetRating()}>Reset</button>
				</li>
			) : (
				""
			)}
		</ul>
	);
}