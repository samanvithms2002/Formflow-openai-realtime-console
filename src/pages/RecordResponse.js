const getNextQuestionRecordResp = async (
    currentPage = null,
    selectedOption = null,
    questionText = null,
    questionType = null,
    NotSelectedOption = null
) => {
    const toDict = () => {
        return {
            question_text: questionText,
            question_type: questionType,
            selectedOption: selectedOption,
            NotSelectedOption: NotSelectedOption
        };
    };

    const appendToLocalStorage = (newObject) => {
        try {
            let data = [];
            const storedData = localStorage.getItem('responseData');
            if (storedData) {
                data = JSON.parse(storedData);
            }

            data.push(newObject);

            localStorage.setItem('responseData', JSON.stringify(data));
        } catch (error) {
            console.error('Error writing to localStorage', error);
        }
    };

    const newObject = toDict();
    appendToLocalStorage(newObject);
    return newObject;
};

export default getNextQuestionRecordResp;
