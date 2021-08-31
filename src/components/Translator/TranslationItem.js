const TranslationItem = ({textToTranslate}) => {

    // component for translation of text into sign language
    function SignLanguage(props) 
    {
        let signLanguage = []
        
        // filter input text for letters and space
        if (props.text !== "")
        {
            signLanguage = props.text.split('')
                .filter(x => x.match(/[A-Z]/gi) || x === " ")
                .map(x => (x === " ") ? "space" : x.toLowerCase())  
        }

        // map letters to sign language images
        return (
            signLanguage.map((letter, index) => {
                return <img key={index} alt="" src={process.env.PUBLIC_URL + '/images/signs/'+letter+'.png'} width="50" />
            })
        )
    }

    // display box with translation
    return (
        <>
            {textToTranslate &&
            <div className="card mb-3 ps-0">
                <div className="card-header fw-bold">
                    Translation
                </div>
                <div className="card-body">
                    <SignLanguage text={textToTranslate} />
                </div>
                <div className="card-footer fst-italic fs-6">
                {textToTranslate}
                </div>
            </div>
            }            
        </>
    )
}
export default TranslationItem