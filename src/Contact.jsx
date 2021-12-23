const Contact = props => {
    return (
        <div className="contact-form">
            <form>
                <label htmlFor="name">
                    Name
                    <input id="name" />
                </label>
                <label htmlFor="message">
                    Message
                    <textarea id="message"></textarea>
                </label>
            </form>
        </div>
    )
}

export default Contact;