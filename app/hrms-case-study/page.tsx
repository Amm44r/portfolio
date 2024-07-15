import React from 'react'
import Footer from "@/components/Footer";
import { GoLightBulb } from "react-icons/go";
import { PiPuzzlePieceLight } from "react-icons/pi";
import { CiChat1 } from "react-icons/ci";

const hrms = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className='w-full'>
        <div className='p-16'> {/* overview */}
            <div className='flex flex-col gap-4 max-w-[1000px] mx-auto'>
                <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                    overview
                </span>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1 text-gray-900 text-[12px]'>
                            My role
                            <span className='text-gray-600'>
                                UI/UX designer <br/>
                                This was a solo passion project
                            </span>   
                        </div>
                        <div className='flex flex-col gap-1 text-gray-900 text-[12px]'>
                            Timeline
                            <span className='text-gray-600'>10 weeks</span>   
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 max-w-[480px] text-gray-900 text-[12px]'>
                        Context
                        <span className='text-gray-600'>
                        During the first semester of University in 2024, 
                        I pursued a niche passion project to address the 
                        inefficiencies in company onboarding processes, 
                        affecting both new employees and HR. <br/>
                        <br/>
                        I redesigned the onboarding and user provisioning 
                        aspects of a Human Resource Management System (HRMS) 
                        to reduce friction for new hires and streamline HR tasks.
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-16'> {/* summary */}
            <div className='flex flex-col gap-4 max-w-[1000px] mx-auto'>
                <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                    summary
                </span>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-gray-900 text-[24px]'>
                        Streamlining HR tasks with department-specific onboarding 
                        and user provisioning:
                    </h3>
                    <p className='text-gray-600 text-[12px]'>
                        I worked on improving the onboarding experience 
                        for new hires and streamlining HR processes with 
                        the new department-specific user provisioning system. 
                        New employees receive customised access to the apps, 
                        benefits information, and training they need to get 
                        up to speed quickly, while HR benefits from a more 
                        efficient and less time-consuming onboarding process.
                    </p>
                </div>
            </div>
        </div>
        <div className='p-16'> {/* problem */}
            <div className='flex flex-col gap-4 max-w-[1000px] mx-auto'>
                <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                    problem
                </span>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-gray-900 text-[24px]'>
                        Identifying pain points
                    </h3>
                    <p className='text-gray-600 text-[12px]'>
                        The HRMS onboarding process faces usability, 
                        efficiency, integration, and feedback issues, 
                        hindering user experience and operational effectiveness.
                    </p>
                </div>
                <img src='/images/hrms/problem.jpg' className='mt-2'/>
            </div>
        </div>
        <div className='p-16'> {/* goal */}
            <div className='flex flex-col gap-4 max-w-[1000px] mx-auto'>
                <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                    goal
                </span>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-gray-900 text-[24px]'>
                        Streamlining the process of user provisioning 
                        and onboarding
                    </h3>
                    <p className='text-gray-600 text-[12px]'>
                        My goal was to enhance the overall onboarding 
                        experience, making it more efficient and user-friendly 
                        for all parties involved. I planned on using templates 
                        and a preplanned roadmap to guide new employees through 
                        the onboarding process, clarifying their tasks and 
                        requirements from the start and reducing repetitive 
                        tasks for HR.
                    </p>
                </div>
                <div className='flex gap-16 mt-2 w-full text-[12px]'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 text-gray-600'>
                            <GoLightBulb className='w-[16px] h-[16px]'/>
                            Intuitive
                        </div>
                        <span className='text-gray-400'>
                            Design a user-friendly interface that is easy 
                            to navigate.
                        </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 text-gray-600'>
                            <PiPuzzlePieceLight className='w-[16px] h-[16px]'/>
                            Customisable
                        </div>
                        <span className='text-gray-400'>
                            Allow for personalisation to meet different 
                            organisational needs.
                        </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 text-gray-600'>
                            <CiChat1 className='w-[16px] h-[16px]'/>
                            User feedback
                        </div>
                        <span className='text-gray-400'>
                            Provide immediate and clear feedback for user 
                            actions.
                        </span>
                    </div>

                </div>
            </div>
        </div>
        <div className='p-16'> {/* research and process */}
            <div className='flex flex-col gap-4 max-w-[1000px] mx-auto'>
                <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                    research and process
                </span>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-gray-900 text-[24px]'>
                        Profile and role assignment audit
                    </h3>
                    <p className='text-gray-600 text-[12px]'>
                        To address the inefficiencies in onboarding processes, 
                        I conducted competitive research into current HRMS 
                        user provisioning and onboarding practices. I concluded 
                        that the primary issues were repetitive tasks for HR and 
                        the back-and-forth communication for permission requests 
                        and task completion between new employees and HR.
                    </p>
                </div>
                <img src='/images/hrms/research-and-process.jpg' className='mt-2'/>
            </div>
        </div>
        <div className='p-16'> {/* component insights */}
            <div className='flex flex-col max-w-[1000px] gap-20 mx-auto'>
                <div className='flex flex-col gap-4'>
                    <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                        component insights
                    </span>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col gap-2 max-w-[480px]'>
                            <h3 className='text-gray-900 text-[24px]'>
                                Crafting an eye catching preview experience
                            </h3>
                            <p className='text-gray-600 text-[12px]'>
                                A seemingly simple component ended up having 
                                many factors that influenced the experience. 
                                Here are some thoughts and design choices I 
                                carefully considered to achieve a great user 
                                experience.
                            </p>
                        </div>
                        <img src='/images/hrms/component-insights-0.jpg' className='max-w-[446px]'/>
                    </div>
                </div>
                    
                <div className='flex flex-col gap-6'> {/* 1 */}
                    <img src='/images/hrms/component-insights-1.jpg'/>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-gray-900 text-[24px]'>
                            Display details on hover or on click
                        </h3>
                        <p className='text-gray-600 text-[12px]'>
                            On hover offers clarity and reduces UI clutter, 
                            but it can create a sense of disconnection between 
                            sections. On click maintains a simple interface 
                            and centralises all elements. <br/>
                            <br/>
                            Ultimately, I prioritised cohesion between 
                            sections and nested items. I chose to use drop 
                            downs to reduce interface clutter, while giving 
                            users the flexibility to expand each section based 
                            on their tasks.
                        </p>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-6'> {/* 2 */}
                    <img src='/images/hrms/component-insights-2.jpg'/>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-gray-900 text-[24px]'>
                            ‘Click to add’ or ‘drag and drop to add’
                        </h3>
                        <p className='text-gray-600 text-[12px]'>
                            ‘Click to add’ offers immediate action with a 
                            straightforward interface, ensuring simplicity and 
                            clarity in item addition. Conversely, ‘drag and drop 
                            to add’ provides a tactile, intuitive method for 
                            users to organise items without going into an ‘item 
                            selection’ state. <br/>
                            <br/>
                            Ultimately, I prioritised usability and user preference, 
                            integrating both options to cater to different user workflows 
                            and preferences seamlessly - more on this in the accessibility 
                            section.
                        </p>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-6'> {/* 3 and 4 */}
                    <img src='/images/hrms/component-insights-3.jpg'/>
                    <img src='/images/hrms/component-insights-4.jpg'/>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-gray-900 text-[24px]'>
                            Additional states for adding and removing items?
                        </h3>
                        <p className='text-gray-600 text-[12px]'>
                            When handling item removal, I set up different approaches 
                            for mobile and desktop users. On mobile, you simply 
                            tap and hold an item to bring up the removal state which 
                            is a minus button in the top right corner of the item. 
                            It’s quick and straightforward, perfect for smaller screens 
                            where you want instant action. <br/>
                            <br/>
                            Meanwhile, on desktop, I went with a right-click interaction. 
                            This triggers a little tooltip that asks for confirmation 
                            before removing, just to make sure you’re really sure about 
                            removing something. These setups cater to how people naturally 
                            interact with their devices, making the whole process smoother 
                            and more intuitive.
                        </p>
                    </div>
                    
                </div>

                
            </div>
        </div>
        <div className='p-16'> {/* visual design */}
            <div className='flex flex-col max-w-[1000px] gap-20 mx-auto'>
                <div className='flex flex-col gap-4'>
                    <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                        visual design
                    </span>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col gap-2 max-w-[480px]'>
                            <h3 className='text-gray-900 text-[24px]'>
                                Visual iterations
                            </h3>
                            <p className='text-gray-600 text-[12px]'>
                                I experimented with different visual representation 
                                of the section mainly working on colour contrast and 
                                readability. 
                            </p>
                        </div>
                        <img src='/images/hrms/visual-design-0.jpg' className='max-w-[396px]'/>
                    </div>
                </div>
                    
                <div className='flex flex-col gap-6'> {/* 1 */}
                    <img src='/images/hrms/visual-design-1.jpg'/>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-gray-900 text-[24px]'>
                            Experimenting...
                        </h3>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-6'> {/* 2 */}
                    <img src='/images/hrms/visual-design-2.jpg'/>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-gray-900 text-[24px]'>
                            Number preview placement
                        </h3>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div className='p-16'> {/* accessibility */}
            <div className='flex flex-col max-w-[1000px] gap-20 mx-auto'>
                <div className='flex flex-col gap-4'>
                    <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                        accessibility
                    </span>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col gap-2 max-w-[480px]'>
                            <h3 className='text-gray-900 text-[24px]'>
                                How can we design modals that are accessible 
                                to everyone?
                            </h3>
                            <p className='text-gray-600 text-[12px]'>
                                For users on laptops and on iPads, drag-and-drop 
                                can be challenging. Implementing click-to-add 
                                functionality simplifies the process and reduces 
                                confusion with scrolling gestures.
                            </p>
                        </div>
                        <img src='/images/hrms/accessibility-0.jpg' className='max-w-[396px]'/>
                    </div>
                </div>
                    
                <div className='flex flex-col gap-6'> {/* 1 */}
                    <img src='/images/hrms/accessibility-1.jpg'/>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-gray-900 text-[24px]'>
                            Bulk adding items
                        </h3>
                        <p className='text-gray-600 text-[12px]'>
                            Offering different options for the same actions 
                            enhances the user experience, by implementing 
                            both ‘drag and drop’ and ‘click to add’ users can 
                            choose their preferred method.
                        </p>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-6'> {/* 2 */}
                    <img src='/images/hrms/accessibility-2.jpg'/>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-gray-900 text-[24px]'>
                            Select state micro-interactions
                        </h3>
                        <p className='text-gray-600 text-[12px]'>
                            Instant add lets users quickly add items with just 
                            one click, making things fast and efficient. However, 
                            it can cause the items to shift around every time 
                            something’s added, which can be a bit disruptive. 
                            On the other hand select and add offers a more thoughtful 
                            approach, where users can pick multiple items at once. 
                            This way, everything stays more organised and under control.
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div className='p-16'> {/* design systems */}
            <div className='flex flex-col max-w-[1000px] gap-20 mx-auto'>
                <div className='flex flex-col gap-4'>
                    <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
                        design systems
                    </span>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col gap-2 max-w-[480px]'>
                            <h3 className='text-gray-900 text-[24px]'>
                                Template details
                            </h3>
                            <p className='text-gray-600 text-[12px]'>
                                For users on laptops and on iPads, drag-and-drop 
                                can be challenging. Implementing click-to-add 
                                functionality simplifies the process and reduces 
                                confusion with scrolling gestures.
                            </p>
                            <h3 className='text-gray-900 text-[24px] mt-2'>
                                Spacing guidelines
                            </h3>
                            <p className='text-gray-600 text-[12px]'>
                                <span className='text-orange-400'>32px</span> between main header and content</p>
                            <p className='text-gray-600 text-[12px]'>
                                <span className='text-blue-400'>24px</span> between sub header and sub content</p>
                            <p className='text-gray-600 text-[12px]'>
                                <span className='text-red-400'>16px</span> for main content and sub content padding</p>
                            <p className='text-gray-600 text-[12px]'>
                                <span className='text-purple-400'>8px</span> gap between content</p>
                        </div>
                        <img src='/images/hrms/design-systems.jpg' className='max-w-[350px]'/>
                    </div>
                </div>

            </div>
        </div>
        <div className='p-16'> {/* final design */}
            <div className='flex max-w-[1000px] mx-auto'>
                <div className='flex flex-col mx-auto gap-6'>
                    <img src='/images/hrms/final-design.jpg' className='max-w-[728px]'/>
                    <h3 className='text-gray-900 text-[24px] text-center'>
                        Final design
                    </h3>
                </div>

            </div>
        </div>
        <Footer />
        </div>
    </div>
    
    
  )
}

export default hrms