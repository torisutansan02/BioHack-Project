export default function NavigationButton({state, moveQuestion}) {
    const {currentQuestion, answers, numberOfQuestions} = state;
    const buttonStyles = {
        disabled: "bg-blue-300 text-black font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed",
        active: "bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full",
    };
    
    const getButton = (direction) => {
        if (direction === "next") {
            return (
                <button onClick = {() => moveQuestion("next")}
                 className = {!answers[currentQuestion] ? x : y}
                >
                    {
                        currentQuestion !== numberOfQuestions - 1 
                        ? "Next" 
                        : "Finish"
                    }
                </button>
            );
        }
        else 
        {
            if (currentQuestion === 0) {
                return <button className = {x}> Previous </button>;
            }
            else {
                return (
                    <button className = {y} onClick = {() => moveQuestion("prev")}>
                        Previous
                    </button>
                );
            }
        }
    };

    const {disabled: x, active: y} = buttonStyles;

    return (
        <div className = "flex gap-2 m-2">
            {getButton("prev")}
            {getButton("next")}
        </div>
    );
}