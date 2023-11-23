import React from 'react'
import { motion } from 'framer-motion'

const SpinningWheel = () => {
  return (
    <>
        <div className='w-full h-screen bg-slate-900 flex items-center justify-start'>

            <div className="flex h-80 w-80 items-center justify-center rounded-full border-2 border-pink-200 bg-white p-3">
        
                <div className="h-40 w-40 rounded-full bg-pink-50"></div>

                <div className="animate-orbit absolute h-10 w-10 animate-spin rounded-full" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png'); background-size: cover;"></div>

                <div className="animate-orbit nth-child(2) absolute h-10 w-10 animate-spin rounded-full" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png'); background-size: cover;"></div>

                <div className="animate-orbit nth-child(3) absolute h-10 w-10 animate-spin rounded-full" style="background-image: url('https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/amazon-512.png'); background-size: cover;"></div>

                <div className="animate-orbit nth-child(4) absolute h-10 w-10 animate-spin rounded-full bg-[url('https://cdn-icons-png.flaticon.com/512/5968/5968866.png')] bg-cover"></div>

            </div>

        </div>
    </>
  )
}

export default SpinningWheel





{
    /* <div class="circle_animation2 relative grid h-52 w-52 place-content-center rounded-full bg-[#202224] sm:h-72 sm:w-72">

                <div class="inner_cicle h-32 w-32 rounded-full bg-[#181a1b] sm:h-40 sm:w-40 ">
                    
                    <div class="crotate2 absolute h-16 w-16">
                        <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                            <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span>
                            
                            <img  src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fkgcmgzbg6bxyrkaj5stv_7f859fcc30.png&w=1920&q=75" class="scale-[2.2]" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"/>
                        </span>
                    </div>
                    
                    <div class="crotate2 absolute h-16 w-16">
                        <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                            <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span>
                            
                            <img  src="/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fdoiz1t2gzivmgj9mmrlu_d856e1a02d.png&amp;w=3840&amp;q=75" class="scale-[2.2]" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"/>
                        </span>
                    </div>
                    
                    <div class="crotate2 absolute h-16 w-16">
                        <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                            <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span>
                            
                            <img  src="/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fzif4s9vnfj2mi8kgpksa_a578a281f5.png&amp;w=3840&amp;q=75" class="scale-[2.2]" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"/>
                        </span>
                    </div>
                    
                    <div class="crotate2 absolute h-16 w-16">
                        <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                            <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span>
                            
                            <img  src="/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fd2vqxmvfziqcf21is5gh_08116fc328.png&amp;w=3840&amp;q=75" class="scale-[2.2]" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"/>
                        </span>
                    </div>

                </div>

</div> */
}
