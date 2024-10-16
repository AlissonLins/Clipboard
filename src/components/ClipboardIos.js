function ClipboardIos() {
    return (
        <>
        <section className='font-BaiJamjuree flex items-center justify-center flex-col text-center mb-12 p-6'>
            <div className='mb-8 max-w-screen-md'>
                <h1 className='text-3xl text-black font-semibold mb-6'>Clipboard for iOS and Mac OS</h1>
                <p className='text-lg text-gray-400 leading-relaxed'>Availabe for free on the App Store. Download for Mac or iOS, sync with iCloud and <br/>
                you're ready to start adding to your clipboard</p>
            </div>
            <ul className='flex items-center space-x-4 list-none'>
                <li className='mx-1 my-5 '>
                    <button className='rounded-3xl bg-StrongCyan text-white font-medium px-6 py-3 hover:bg-opacity-80 transition duration-300'>Download for iOS</button>
                </li>

                <li className='mx-1 my-5 '>
                    <button className='rounded-3xl bg-LightBlue text-white font-medium px-6 py-3 hover:bg-opacity-80 transition duration-300'>Download for Mac</button>
                </li>
            </ul>

        </section>
        </>
    )
}

export default ClipboardIos;