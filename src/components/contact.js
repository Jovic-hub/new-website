import React, {useRef} from 'react';
import emailjs from 'emailjs-com'

require('dotenv').config();
const Email = () => {
	const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
			alert('I received your message 😃')
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  
    return (
		<div className="container mx-auto font-inter py-12">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{ backgroundImage: `url(https://cc-production-uploads-bucket.s3.amazonaws.com/uploads/2021/08/CN-TowerMainWEB.jpg)` }}
					></div>
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none dark:bg-gray-500">
						<h3 className="pt-4 text-2xl text-center dark:text-white">Contact me!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded dark:bg-gray-500" ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                    Subject
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
									required
                                />
							</div>                        
							<div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:text-white"
                                    name="from_name"
                                    type="text"
                                    placeholder="First Name"
									required
                                />
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									name="from_email"
									type="email"
									placeholder="Email"
									required
								/>
							</div>
                            <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
									Message
								</label>
								<textarea
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									name="message"
									type="text"
									placeholder="Message"
									required
								/>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 dark:bg-green-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
                                    value="send"
								>
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>      
      
    );

}

export default Email;
