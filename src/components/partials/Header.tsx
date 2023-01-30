import MoreIcon from "@/assets/icons/MoreIcon";
import TweetButton from "@/assets/icons/TweetButton";
import { MENU_HEADER_LISTS, MENU_HEADER_LISTS_AUTH } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Avatar from "../shared/Avatar";
import FullName from "../shared/FullName";
import Logo from "../shared/Logo";
import NavItem from "../shared/NavItem";
import UseName from "../shared/UseName";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Header = () => {
   const isLogged = true;
   const user = {
      username: "yuu.erp",
   };
   return (
      <React.Fragment>
         <header className="xs:grow grow-0 xs:items-end items-end z-0 select-none flex flex-col">
            <div className="xl:w-[275px] sm:w-[88px] w-[68px] xs:flex hidden">
               <div className="h-full fixed top-0 flex flex-col">
                  <div className="overflow-y-auto md:items-start items-center flex flex-col justify-between h-full xl:w-[275px] sm:w-[88px] w-[68px] sm:px-3 px-1 bg-tw-bg-main-900">
                     <div className="flex flex-col items-start w-full">
                        <div className="max-w-full py-[2px]">
                           <h1 className="min-w-[32px] self-stretch items-center cursor-pointer flex grow">
                              <Link href="/">
                                 <span className="min-w-[52px] min-h-[52px] cursor-pointer flex items-center justify-center hover:bg-tw-main-color-small rounded-full font-bold text-[15px]">
                                    <Logo className="h-8 w-8 text-tw-bg-logo-reverse" />
                                 </span>
                              </Link>
                           </h1>
                        </div>
                        {/* Menu */}
                        <div className="w-full mt-[2px] mb-1">
                           {isLogged ? (
                              <nav className="flex flex-col items-start">
                                 {MENU_HEADER_LISTS.map((item) =>
                                    item.page === "Lists" ? (
                                       <NavItem
                                          href={`/${user.username}/lists`}
                                          key={item.page}
                                          username={user.username}
                                       >
                                          {({ isActive }) => (
                                             <div className="flex items-center grow w-full">
                                                <div className="hover-nav flex items-center p-[12px] rounded-full">
                                                   <div>
                                                      {isActive ? (
                                                         <IconComponent
                                                            Icon={
                                                               item.activeIcon
                                                            }
                                                         />
                                                      ) : (
                                                         <IconComponent
                                                            Icon={item.icon}
                                                         />
                                                      )}
                                                   </div>
                                                   <div
                                                      className={classNames(
                                                         "mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden",
                                                         isActive && "font-bold"
                                                      )}
                                                   >
                                                      <span>{item.page}</span>
                                                   </div>
                                                </div>
                                             </div>
                                          )}
                                       </NavItem>
                                    ) : item.page === "Profile" ? (
                                       <NavItem
                                          href={`/${user.username}`}
                                          key={item.page}
                                          username={user.username}
                                       >
                                          {({ isActive }) => (
                                             <div className="flex items-center grow w-full">
                                                <div className="hover-nav flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full">
                                                   <div>
                                                      {isActive ? (
                                                         <IconComponent
                                                            Icon={
                                                               item.activeIcon
                                                            }
                                                         />
                                                      ) : (
                                                         <IconComponent
                                                            Icon={item.icon}
                                                         />
                                                      )}
                                                   </div>
                                                   <div
                                                      className={classNames(
                                                         "mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden",
                                                         isActive && "font-bold"
                                                      )}
                                                   >
                                                      <span>{item.page}</span>
                                                   </div>
                                                </div>
                                             </div>
                                          )}
                                       </NavItem>
                                    ) : (
                                       <NavItem
                                          href={item.path}
                                          key={item.page}
                                       >
                                          {({ isActive }) => (
                                             <div className="flex items-center grow w-full">
                                                <div className="hover-nav flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full">
                                                   <div>
                                                      {isActive ? (
                                                         <IconComponent
                                                            Icon={
                                                               item.activeIcon
                                                            }
                                                         />
                                                      ) : (
                                                         <IconComponent
                                                            Icon={item.icon}
                                                         />
                                                      )}
                                                   </div>
                                                   <div
                                                      className={classNames(
                                                         "mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden",
                                                         isActive && "font-bold"
                                                      )}
                                                   >
                                                      <span>{item.page}</span>
                                                   </div>
                                                </div>
                                             </div>
                                          )}
                                       </NavItem>
                                    )
                                 )}
                                 <div className="hover-nav-item flex-col outline-none cursor-pointer items-start grow w-full flex">
                                    <div className="flex items-center grow w-full cursor-pointer">
                                       <div className="hover-nav flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full">
                                          <div>
                                             <MoreIcon className="w-[1.75rem] h-[1.75rem]" />
                                          </div>
                                          <div
                                             className={classNames(
                                                "mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden"
                                             )}
                                          >
                                             <span>More</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </nav>
                           ) : (
                              <nav>
                                 {MENU_HEADER_LISTS_AUTH.map((item) => (
                                    <NavItem href={item.path} key={item.page}>
                                       {({ isActive }) => (
                                          <div className="flex items-center grow w-full">
                                             <div className="flex items-center p-[12px] hover:bg-bg-color-header-hover rounded-full">
                                                <div>
                                                   {isActive ? (
                                                      <IconComponent
                                                         Icon={item.activeIcon}
                                                      />
                                                   ) : (
                                                      <IconComponent
                                                         Icon={item.icon}
                                                      />
                                                   )}
                                                </div>
                                                <div
                                                   className={classNames(
                                                      "mr-[16px] ml-[15px] text-[20px] text-tt-text-color xl:block hidden",
                                                      isActive && "font-bold"
                                                   )}
                                                >
                                                   <span>{item.page}</span>
                                                </div>
                                             </div>
                                          </div>
                                       )}
                                    </NavItem>
                                 ))}
                              </nav>
                           )}
                        </div>
                        {/* TweetButton  */}
                        <div className="xl:w-[90%] w-auto my-[4px] mt-2">
                           <div className="bg-tw-main-color-large hover:bg-tw-main-color-medium min-w-[52px] min-h-[52px] cursor-pointer p-0 rounded-full flex items-center justify-center text-[17px] text-white font-bold">
                              <span className="xl:block hidden">Tweet</span>
                              <TweetButton className="w-[24px] h-[24px] text-white xl:hidden block" />
                           </div>
                        </div>
                     </div>
                     {/* Bottom */}
                     <div className="my-3 flex flex-col">
                        <div className="flex flex-row items-center p-3 rounded-full hover:bg-tw-bg-main-800 cursor-pointer">
                           <Avatar
                              src="https://pbs.twimg.com/profile_images/1430838142270017543/yugL-TBb_400x400.jpg"
                              className="w-[48px]"
                           />
                           <div className="shrink flex flex-col max-w-[170px]">
                              <div className="shrink grow max-w-full mx-3 flex flex-col">
                                 <FullName label="Yuu - Lê Khải Hoàn" />
                                 <UseName label="@yuu.erp" />
                              </div>
                           </div>
                           <div className="items-end grow flex flex-col">
                              <BiDotsHorizontalRounded className="text-tw-text-main h-[1.25em] inline-block" />
                           </div>
                        </div>
                     </div>
                     {/* <div className="my-[8px] flex items-center xl:justify-between justify-center p-[8px] rounded-full w-full relative hover:bg-tw-bg-main-800 cursor-pointer">
                        logout
                     </div> */}
                  </div>
               </div>
            </div>
         </header>
      </React.Fragment>
   );
};
interface IconProps {
   className?: string;
}
interface IconComponentProps {
   Icon: React.ComponentType<IconProps>;
}
export const IconComponent: React.FC<IconComponentProps> = ({ Icon }) => {
   return <Icon className="w-[1.75rem] h-[1.75rem]" />;
};
export default React.memo(Header);
