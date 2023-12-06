import React from 'react'

const Footer = () => {
  return (
    <div class='flex justify-center items-center h-screen'>
    <div class='h-[688px] w-full bg-[#204E51] px-[150px] py-[10rem] flex justify-between'>
        <div className=' text-[white]'>
             <h1 className='text-[35px] font-semibold'>Agrolux</h1>
             <p className='text-[20px] font-thin'>Li Europan lingues es membres del sam <br/>familie. Lor separat existentie </p>
             <div className='flex gap-4 mt-[20px]'>
                <div className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect x="0.463379" width="39.0244" height="40" rx="5" fill="#FEF5F5"/>
<path d="M25.4259 6.6665H14.5251C9.79017 6.6665 6.96741 9.55984 6.96741 14.4132V25.5732C6.96741 30.4398 9.79017 33.3332 14.5251 33.3332H25.4129C30.1479 33.3332 32.9707 30.4398 32.9707 25.5865V14.4132C32.9837 9.55984 30.1609 6.6665 25.4259 6.6665ZM19.9755 25.1732C17.1918 25.1732 14.9284 22.8532 14.9284 19.9998C14.9284 17.1465 17.1918 14.8265 19.9755 14.8265C22.7593 14.8265 25.0227 17.1465 25.0227 19.9998C25.0227 22.8532 22.7593 25.1732 19.9755 25.1732ZM27.6763 13.1732C27.6113 13.3332 27.5203 13.4798 27.4032 13.6132C27.2731 13.7332 27.13 13.8265 26.9739 13.8932C26.7372 13.9962 26.4759 14.0245 26.2233 13.9747C25.9708 13.9248 25.7385 13.7989 25.556 13.6132C25.439 13.4798 25.3479 13.3332 25.2829 13.1732C25.216 13.0129 25.1807 12.8408 25.1788 12.6665C25.1788 12.4932 25.2178 12.3198 25.2829 12.1598C25.3479 11.9865 25.439 11.8532 25.556 11.7198C25.8552 11.4132 26.3105 11.2665 26.7268 11.3598C26.8178 11.3732 26.8959 11.3998 26.9739 11.4398C27.052 11.4665 27.13 11.5065 27.2081 11.5598C27.2731 11.5998 27.3381 11.6665 27.4032 11.7198C27.5203 11.8532 27.6113 11.9865 27.6763 12.1598C27.7414 12.3198 27.7804 12.4932 27.7804 12.6665C27.7804 12.8398 27.7414 13.0132 27.6763 13.1732Z" fill="#204E51"/>
</svg></div>
                <div className='cursor-pointer'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="39.0244" height="40" rx="5" fill="#FEF5F5"/>
<path d="M29.8097 14.2272C29.8677 14.1465 29.7821 14.0422 29.6894 14.0781C29.0307 14.3334 28.3422 14.5057 27.64 14.5906C28.4219 14.1235 29.0253 13.4124 29.3599 12.5705C29.3939 12.4848 29.3003 12.4082 29.2195 12.4528C28.4928 12.8541 27.709 13.1431 26.8949 13.3096C26.8608 13.3165 26.8257 13.3049 26.8018 13.2797C26.1908 12.635 25.3865 12.2058 24.5098 12.0574C23.6146 11.906 22.6945 12.056 21.8938 12.4838C21.093 12.9116 20.4569 13.5931 20.0852 14.4214C19.7318 15.209 19.6365 16.0869 19.8108 16.93C19.8243 16.9954 19.7731 17.0572 19.7064 17.0531C18.1224 16.9547 16.5747 16.5334 15.1587 15.8145C13.7463 15.0974 12.4955 14.0998 11.4827 12.8833C11.4377 12.8293 11.3525 12.8363 11.3198 12.8984C11.0046 13.4965 10.8396 14.1631 10.84 14.8406C10.8387 15.515 11.0042 16.1792 11.3218 16.7742C11.6393 17.3691 12.099 17.8763 12.66 18.2506C12.0651 18.2344 11.4818 18.0873 10.9513 17.8207C10.8829 17.7863 10.8009 17.8352 10.8045 17.9117C10.8458 18.8009 11.1723 19.6936 11.7373 20.3786C12.3387 21.1074 13.1733 21.6062 14.1 21.7906C13.7433 21.8992 13.3729 21.9564 13 21.9606C12.7971 21.9582 12.5945 21.9433 12.3936 21.9158C12.319 21.9056 12.2582 21.9764 12.2843 22.0469C12.5607 22.7944 13.049 23.4467 13.6911 23.9228C14.3775 24.4318 15.2056 24.7142 16.06 24.7306C14.6172 25.8659 12.8359 26.4855 11 26.4906C10.8114 26.4912 10.6228 26.4851 10.4347 26.4723C10.3287 26.4651 10.2799 26.6063 10.3713 26.6605C12.1601 27.7221 14.2046 28.2831 16.29 28.2806C17.8297 28.2966 19.3571 28.0056 20.7831 27.4247C22.2091 26.8437 23.505 25.9845 24.5952 24.8971C25.6854 23.8097 26.548 22.516 27.1326 21.0915C27.7171 19.667 28.012 18.1403 28 16.6006V16.1208C28 16.0892 28.0149 16.0595 28.0401 16.0405C28.7184 15.5283 29.3149 14.9169 29.8097 14.2272Z" fill="#204E51"/>
</svg>
</div>

                <div className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect x="0.536621" width="39.0244" height="40" rx="5" fill="#FEF5F5"/>
<path d="M33.0569 25.5865C33.0569 30.4398 30.2341 33.3332 25.4992 33.3332H23.9512C23.2358 33.3332 22.6504 32.7332 22.6504 31.9998V24.3065C22.6504 23.9465 22.9366 23.6398 23.2878 23.6398L25.5772 23.5998C25.7593 23.5865 25.9154 23.4532 25.9545 23.2665L26.4098 20.7198C26.4186 20.6621 26.4151 20.6031 26.3996 20.5469C26.384 20.4907 26.3567 20.4386 26.3196 20.3942C26.2825 20.3499 26.2365 20.3143 26.1847 20.2899C26.1329 20.2656 26.0765 20.253 26.0195 20.2532L23.2488 20.2932C22.8846 20.2932 22.5984 19.9998 22.5854 19.6398L22.5333 16.3732C22.5333 16.1598 22.7024 15.9732 22.9236 15.9732L26.0455 15.9198C26.2667 15.9198 26.4358 15.7465 26.4358 15.5198L26.3837 12.3198C26.3837 12.0932 26.2146 11.9198 25.9935 11.9198L22.4813 11.9732C21.9686 11.9812 21.4625 12.0928 20.9919 12.3016C20.5214 12.5104 20.0957 12.8124 19.7392 13.1902C19.3827 13.568 19.1025 14.0141 18.9145 14.5031C18.7266 14.9921 18.6346 15.5143 18.6439 16.0398L18.7089 19.7065C18.722 20.0798 18.4358 20.3732 18.0715 20.3865L16.5106 20.4132C16.2894 20.4132 16.1203 20.5865 16.1203 20.8132L16.1593 23.3465C16.1593 23.5732 16.3285 23.7465 16.5496 23.7465L18.1106 23.7198C18.4748 23.7198 18.761 24.0132 18.774 24.3732L18.8911 31.9732C18.9041 32.7198 18.3187 33.3332 17.5902 33.3332H14.5984C9.86341 33.3332 7.04065 30.4398 7.04065 25.5732V14.4132C7.04065 9.55984 9.86341 6.6665 14.5984 6.6665H25.4992C30.2341 6.6665 33.0569 9.55984 33.0569 14.4132V25.5865Z" fill="#204E51"/>
</svg></div>
             </div>
        </div>
        <div className='flex gap-[10rem] mr-[150px]'>
        <div className=' text-[white]'>
             <h1 className='text-[35px] font-semibold'>Pages</h1>
             <p className='cursor-pointer font-thin mt-[15px] '>Home</p>
             <p className='cursor-pointer font-thin mt-[15px] ' >About</p>
             <p className='cursor-pointer font-thin mt-[15px] '>Product</p>
             <p className='cursor-pointer font-thin mt-[15px] '>Blog</p>
        </div>
        <div className=' text-[white] '>
             <h1 className='text-[35px] font-semibold'>About</h1>
             <p className='cursor-pointer font-thin mt-[15px]'>Testimonial</p>
             <p className='cursor-pointer font-thin mt-[15px]'>Our Services</p>
             <p className='cursor-pointer font-thin mt-[15px]'>Contact Us</p>
             <p className='cursor-pointer font-thin mt-[15px]'>Benefits</p>
        </div>

        </div>
       
    </div>
</div>
  )
}

export default Footer