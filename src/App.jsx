import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const INITIAL_RATING = {
	good: 0,
	neutral: 0,
	bad: 0,
};

function App() {
  const [rating, setRating] = useState(() => {
		const savedRatings = window.localStorage.getItem("saved-rating");
		if (savedRatings !== null) {
			try {
				const parsedRatings = JSON.parse(savedRatings);
				if (typeof parsedRatings === "object" && parsedRatings !== null) {
					return parsedRatings;
				}
			} catch (error) {
				console.error("Error parsing saved ratings from localStorage:", error);
				return INITIAL_RATING;
			}
		}
		return INITIAL_RATING;
	});
  const updateFeedback = (feedbackType) => {
		setRating((prevState) => ({
			...prevState,
			[feedbackType]: prevState[feedbackType] + 1,
		}));
	};

	const resetRating = () => {
		setRating(INITIAL_RATING);
	};

	useEffect(() => {
		window.localStorage.setItem("saved-rating", JSON.stringify(rating));
	}, [rating]);

	const totalFeedback = rating.good + rating.bad + rating.neutral;
	const positiveFeedback = totalFeedback
		? Math.round((rating.good / totalFeedback) * 100)
		: 0;
  return (
    <>
     <Description />
     <Options
						options={rating}
						totalFeedback={totalFeedback}
						updateFeedback={updateFeedback}
						resetRating={resetRating}
					/>
          {totalFeedback ? (
						<Feedback
							ratings={rating}
							totalFeedback={totalFeedback}
							positiveFeedback={positiveFeedback}
						/>
					) : (
						<Notification />
					)}
    </>
  )
}

export default App
