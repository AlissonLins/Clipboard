import blacklist from '../images/icon-blacklist.svg';
import text from '../images/icon-text.svg'
import preview from '../images/icon-preview.svg'

import google from '../images/logo-google.png';
import ibm from '../images/logo-ibm.png';
import microsoft from '../images/logo-microsoft.png';
import hp from '../images/logo-hp.png';
import vector from '../images/logo-vector-graphics.png';
function SuperCharge() {
    return (
        <>  
        <section className='font-BaiJamjuree flex flex-col items-center justify-center text-center mb-14 space-y-10 px-6 lg:px-0'>
            <div className='mb-8'>
                <h1 className='text-3xl text-black font-semibold mb-6'>SuperCharge you workflow</h1>
                <p className='text-lg text-gray-400 '>We've got the tools to boost your productivity.</p>
            </div>
            
            <div className='grid gap-12 lg:grid-cols-3'>
                <div className='flex flex-col items-center text-center space-y-4'>
                    <img src={blacklist} />
                    <h2 className='text-2xl text-black font-semibold'>Create blacklists</h2>
                    <p className='text-lg text-gray-500 '>Ensure sensitive information never makes its <br/> way to your clipboard by excluding certain <br/> sources.</p>
                </div>

                <div className='flex flex-col items-center text-center space-y-4'>
                    <img src={text} />
                    <h2 className='text-2xl text-black font-semibold'>Plain text snippets</h2>
                    <p className='text-lg text-gray-500 '>Remove unwanted dormatting from copied text <br/> for a consistent look.</p>
                </div>
                
                <div className='flex flex-col items-center text-center space-y-4'>
                    <img src={preview} />
                    <h2 className='text-2xl text-black font-semibold'>Sneak preview</h2>
                    <p className='text-lg text-gray-500 '>Quick preview of all snippets on your Clipboard <br/> for easy access.</p>
                </div>
            </div>

            <div className='flex justify-center space-x-10 mt-10 gap-10'>
                < img src={google} className='w-30 h-14' />
                < img src={ibm} className='w-30 h-14' />
                < img src={microsoft} className='w-30 h-14' />
                < img src={hp} className='w-30 h-14' />
                < img src={vector} className='w-36 h-14' />
            </div>
        </section>  
        </>
    )
}

export default SuperCharge;