import logo from '../images/logo.svg';

function Header () {
    return (
        <>
        <section className="bg-[url('./images/bg-header-desktop.png')] font-BaiJamjuree bg-cover">
            <div className='flex items-center justify-center py-6'>
                <img className='max-w-full' src={logo} />
            </div>
            <div className='flex items-center justify-center flex-col text-center '>
                <h1 className='text-5xl text-black font-semibold mb-6'>A history of everything you copy</h1>
                <p className=' text-lg text-gray-400 flex items-center justify-center '>Clipboard allows you to track and organize everything you copy. Instantly <br/> acess
                    your clipboard on all your devices.
                </p>
                <ul className='flex items-center list-none'>
                    <li className='mx-1 my-5 '>
                        <button className='rounded-3xl bg-StrongCyan text-white font-medium p-3'>Download for iOS</button>
                    </li>
                    <li className='mx-1 my-5'>
                        <button className='rounded-3xl bg-LightBlue text-white font-medium p-3'>Download for Mac</button>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Header;