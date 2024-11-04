export const get_next_question_record_resp = async (params) => {
    // Destructure parameters from the input object
    const currentPage = params.currentPage || null;
    const selectedOption = params.selectedOption || null;
    const questionText = params.questionText || null;
    const questionType = params.questionType || null;
    const NotSelectedOption = params.NotSelectedOption || null;

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
    console.log(newObject); // Check the constructed object
    appendToLocalStorage(newObject);
    return newObject;
};