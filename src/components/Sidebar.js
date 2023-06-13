import { MailOutlined, SettingOutlined,AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';



// function getItem(label, key, icon, children, type) {
//     return {
//       key,
//       icon,
//       children,
//       label,
//       type,
//     };
//   }
  const items = [

{
    label: 'Websites',
    key: 'website',
    icon: <MailOutlined />,
},
{
    label: 'Subscriptions',
    key: 'subscriptions',
    icon: <MailOutlined />,
},
{
    label: 'AI Bots',
    key: 'bots',
    icon: <MailOutlined />,
},
{
    label: 'Teams',
    key: 'teams',
    icon: <MailOutlined />,
},
{
    label: 'Brand & Business',
    key: 'brand-and-business',
    icon: <MailOutlined />,
},

{
    label: 'FAQ & Support',
    key: 'faq',
    icon: <MailOutlined />,
},
{
    label: 'Community',
    key: 'community',
    icon: <MailOutlined />,
},


    // getItem('Websites', <MailOutlined />, ),
    // getItem('Subscriptions', <AppstoreOutlined />, ),
    
    // getItem('Bots', <SettingOutlined />, ),
    // getItem('Teams', <SettingOutlined />, ),
    // getItem('Brand & Business', <SettingOutlined />, ),
    // getItem('FAQ & Support', <SettingOutlined />, ),
    // {
    //     type: 'divider',
    //   },
    // getItem('Community', <SettingOutlined />, ),
    
  ];


  const Sidebar = () => {

    const navigate=useNavigate()
    
      return (
        <Menu
          onClick={(e)=>{navigate(`/${e.key}`)}}
          style={{
            // width: 256,
          }}
          defaultSelectedKeys={['1']}
        //   defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
         
        />
      );
  }




export default Sidebar



{/* <div class="dash-app-view">
            <aside class="dash-app-view__side d-none d-xl-flex">
                <nav class="nav-side">
                    <ul class="nav flex-column justify-content-center">
                        <li class="nav-item"><a data-gac="My Account" data-gaa="Cross App Elements" data-gal="Sidebar"
                                data-gal2="Websites" class="nav-link" href="/websites/"><i
                                    class="icon icon-websites  nav-link-icon mr-3  "><svg class="icon-src "
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM32 80c0-8.8 7.2-16 16-16h48v64H32V80zm448 352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160h448v272zm0-304H128V64h336c8.8 0 16 7.2 16 16v48z">
                                        </path>
                                    </svg></i>Websites</a></li>
                        <li class="nav-item"><a data-gac="My Account" data-gaa="Cross App Elements" data-gal="Sidebar"
                                data-gal2="Subscriptions" class="nav-link" href="/subscriptions/"><i
                                    class="icon icon-subscription  nav-link-icon mr-3  "><svg class="icon-src "
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M469.3333 57H42.6667C19.111 57 0 76.1111 0 99.6667v312.8889c0 23.5555 19.1111 42.6666 42.6667 42.6666h426.6666c23.5556 0 42.6667-19.111 42.6667-42.6666V99.6666C512 76.1112 492.8889 57 469.3333 57zm14.2223 355.5556c0 7.8222-6.4 14.2222-14.2223 14.2222H42.6667c-7.8223 0-14.2223-6.4-14.2223-14.2222V99.6666c0-7.8222 6.4-14.2222 14.2223-14.2222h426.6666c7.8223 0 14.2223 6.4 14.2223 14.2223v312.8889zm-312.889-60.4445v7.1111c0 5.8667-4.8 10.6667-10.6666 10.6667H96c-5.8667 0-10.6667-4.8-10.6667-10.6667v-7.111c0-5.8668 4.8-10.6668 10.6667-10.6668h64c5.8667 0 10.6667 4.8 10.6667 10.6667zm170.6667 0v7.1111c0 5.8667-4.8 10.6667-10.6666 10.6667h-120.889c-5.8666 0-10.6666-4.8-10.6666-10.6667v-7.111c0-5.8668 4.8-10.6668 10.6667-10.6668h120.8889c5.8666 0 10.6666 4.8 10.6666 10.6667z">
                                        </path>
                                    </svg></i>Subscriptions</a></li>
                        <li class="nav-item"><a data-gac="My Account" data-gaa="Cross App Elements" data-gal="Sidebar"
                                data-gal2="Teams" class="nav-link active active" href="/teams/" aria-current="page"><i
                                    class="icon icon-teams  nav-link-icon mr-3  "><svg class="icon-src "
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M480 448s32 0 32-32-32-128-160-128-160 96-160 128 32 32 32 32h256zm-255.84-30.208v-.064.064zm.544-1.792h254.592a8.47 8.47 0 00.448-.064l.256-.064c-.064-8.448-5.344-32.96-24.32-55.04C438.016 340.128 406.976 320 352 320c-54.944 0-85.984 20.16-103.68 40.832-18.976 22.08-24.288 46.624-24.32 55.04.234.045.469.088.704.128zm255.136 1.792v-.064.064zM352 224a64.003 64.003 0 0064-64 64 64 0 10-64 64zm96-64a95.994 95.994 0 01-28.118 67.882 95.994 95.994 0 01-135.764 0 95.994 95.994 0 010-135.764A95.998 95.998 0 01448 160zM221.952 296.96a188.124 188.124 0 00-39.36-7.904A235.38 235.38 0 00160 288C32 288 0 384 0 416c0 21.344 10.656 32 32 32h134.912A71.61 71.61 0 01160 416c0-32.32 12.064-65.344 34.88-92.928 7.776-9.408 16.832-18.208 27.072-26.112zM157.44 320c-53.376.64-83.68 20.48-101.12 40.832C37.216 383.04 32 407.648 32 416h96c0-33.44 10.336-66.752 29.44-96zM48 176a95.998 95.998 0 0196-96 95.998 95.998 0 0196 96 95.996 95.996 0 01-28.118 67.882 95.996 95.996 0 01-135.764 0A95.998 95.998 0 0148 176zm96-64a64 64 0 100 128 64 64 0 000-128z">
                                        </path>
                                    </svg></i>Teams</a></li>
                        <li class="nav-item"><a data-gac="My Account" data-gaa="Cross App Elements" data-gal="Sidebar"
                                data-gal2="Business" class="nav-link" href="/business/"><i
                                    class="icon icon-briefcase  nav-link-icon mr-3  "><svg class="icon-src "
                                        viewBox="0 0 512 512">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M204.8 44.8a32.0025 32.0025 0 0 0-22.628 9.3726A32.0002 32.0002 0 0 0 172.8 76.8v32h166.4v-32a32.0012 32.0012 0 0 0-32-32H204.8Zm172.8 64v-32c0-18.6712-7.417-36.5777-20.62-49.7803C343.778 13.8171 325.871 6.4 307.2 6.4H204.8c-18.671 0-36.578 7.4171-49.78 20.6197C141.817 40.2223 134.4 58.1288 134.4 76.8v32H76.7999c-38.8808 0-70.4 31.519-70.4 70.4v101.986c-.0055.266-.0055.532 0 .798V409.6c0 38.881 31.5192 70.4 70.4 70.4H435.2c38.881 0 70.4-31.519 70.4-70.4V281.984c.005-.266.005-.532 0-.798V179.2c0-38.881-31.519-70.4-70.4-70.4h-57.6ZM76.7999 147.2c-17.6731 0-32 14.327-32 32v90.418A492.7985 492.7985 0 0 0 256 317.169a492.801 492.801 0 0 0 211.2-47.551V179.2c0-17.673-14.327-32-32-32H76.7999ZM467.2 311.779a531.2032 531.2032 0 0 1-211.2 43.79 531.204 531.204 0 0 1-211.2001-43.79V409.6c0 17.673 14.3269 32 32 32H435.2c17.673 0 32-14.327 32-32v-97.821ZM256 236.8c10.604 0 19.2 8.596 19.2 19.2v.256c0 10.604-8.596 19.2-19.2 19.2s-19.2-8.596-19.2-19.2V256c0-10.604 8.596-19.2 19.2-19.2Z"
                                            fill="currentColor"></path>
                                    </svg></i>Brand &amp; Business<span
                                    class="fw-bold position-absolute end-0 mr-3 badge bg-info">New</span></a></li>
                        <li class="nav-item"><a data-gac="My Account" data-gaa="Cross App Elements" data-gal="Sidebar"
                                data-gal2="Support" class="nav-link" href="/dashboard-support/"><i
                                    class="icon icon-support  nav-link-icon mr-3  "><svg class="icon-src "
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M256 480C315.408 480 372.384 456.4 414.392 414.392C456.4 372.384 480 315.408 480 256C480 196.592 456.4 139.616 414.392 97.6081C372.384 55.5999 315.408 32 256 32C196.592 32 139.616 55.5999 97.6081 97.6081C55.5999 139.616 32 196.592 32 256C32 315.408 55.5999 372.384 97.6081 414.392C139.616 456.4 196.592 480 256 480ZM256 512C323.895 512 389.01 485.029 437.019 437.019C485.029 389.01 512 323.895 512 256C512 188.105 485.029 122.99 437.019 74.9807C389.01 26.9714 323.895 0 256 0C188.105 0 122.99 26.9714 74.9807 74.9807C26.9714 122.99 0 188.105 0 256C0 323.895 26.9714 389.01 74.9807 437.019C122.99 485.029 188.105 512 256 512Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M285.759 210.816L212.479 220 209.855 232.16 224.255 234.816C233.663 237.056 235.519 240.448 233.471 249.824L209.855 360.8C203.647 389.504 213.215 403.008 235.711 403.008 253.151 403.008 273.407 394.944 282.591 383.872L285.407 370.56C279.007 376.192 269.663 378.432 263.455 378.432 254.655 378.432 251.455 372.256 253.727 361.376L285.759 210.816zM256 176C273.673 176 288 161.673 288 144 288 126.327 273.673 112 256 112 238.327 112 224 126.327 224 144 224 161.673 238.327 176 256 176z">
                                        </path>
                                    </svg></i>FAQ &amp; Support</a></li>
                    </ul>
                </nav>
                <hr class="hr hr-light w-100 my-0">
                <nav>
                    <ul class="nav nav-side flex-column ">
                        <li class="nav-item"><a data-gac="My Account" data-gaa="Cross App Elements" data-gal="Sidebar"
                                data-gal2="Community" target="_blank"
                                href="https://www.facebook.com/groups/916625091796611" class="nav-link nav-link"><i
                                    class="icon icon-community  nav-link-icon mr-3  "><svg class="icon-src "
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M255.984 46.1634c-24.458 0-44.286 19.8272-44.286 44.2852 0 24.4584 19.828 44.2854 44.286 44.2854 24.458 0 44.285-19.827 44.285-44.2854 0-24.458-19.827-44.2852-44.285-44.2852zm-78.845 43.4235c.462-43.1502 35.585-77.9875 78.845-77.9875 43.247 0 78.363 34.8181 78.844 77.952C402.941 119.787 450.446 188.016 450.446 267.34c0 6.534-.322 12.993-.952 19.361 35.701 7.528 62.499 39.21 62.499 77.151 0 43.548-35.302 78.85-78.849 78.85-21.878 0-41.674-8.91-55.959-23.3-33.231 26.513-75.345 42.361-121.162 42.361-45.83 0-87.956-15.857-121.191-42.384-14.287 14.403-34.093 23.323-55.9828 23.323-43.5473 0-78.84926104-35.302-78.84926104-78.85 0-37.959 26.82426104-69.654 62.55156104-77.162-.6288-6.365-.9507-12.82-.9507-19.35 0-79.293 47.4682-147.499 115.5382-177.7531zm7.577 34.6411c12.652 26.646 39.808 45.07 71.268 45.07 31.472 0 58.637-18.439 71.283-45.102 52.531 26.195 88.615 80.456 88.615 143.144 0 6.719-.414 13.34-1.219 19.841-34.631 8.318-60.368 39.489-60.368 76.671 0 9.12 1.548 17.878 4.396 26.026-27.774 23.294-63.582 37.321-102.668 37.321-39.104 0-74.929-14.041-102.709-37.356 2.841-8.138 4.384-16.884 4.384-25.991 0-37.162-25.709-68.32-60.3123-76.658-.8059-6.504-1.2209-13.131-1.2209-19.854 0-62.663 36.0552-116.905 88.5512-143.112zm248.428 195.339c-24.458 0-44.285 19.827-44.285 44.285 0 24.458 19.827 44.286 44.285 44.286 24.458 0 44.285-19.828 44.285-44.286 0-24.458-19.827-44.285-44.285-44.285zm-354.2948 0c-24.4581 0-44.2852 19.827-44.2852 44.285 0 24.458 19.8271 44.286 44.2852 44.286 24.4578 0 44.2848-19.828 44.2848-44.286 0-24.458-19.827-44.285-44.2848-44.285z">
                                        </path>
                                    </svg></i>Community<i
                                    class="icon icon-link-external icon-16 ml-auto text-gray-200 "><svg
                                        class="icon-src " viewBox="0 0 512 512">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M48 416c0 12.73 5.0571 24.939 14.0589 33.941C71.0606 458.943 83.2696 464 96 464h256c12.73 0 24.939-5.057 33.941-14.059C394.943 440.939 400 428.73 400 416V288c0-4.243-1.686-8.313-4.686-11.314-3.001-3-7.071-4.686-11.314-4.686s-8.313 1.686-11.314 4.686c-3 3.001-4.686 7.071-4.686 11.314v128c0 4.243-1.686 8.313-4.686 11.314-3.001 3-7.071 4.686-11.314 4.686H96c-4.2435 0-8.3131-1.686-11.3137-4.686C81.6857 424.313 80 420.243 80 416V160c0-4.243 1.6857-8.313 4.6863-11.314C87.6869 145.686 91.7565 144 96 144h128c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314s-1.686-8.313-4.686-11.314c-3.001-3-7.071-4.686-11.314-4.686H96c-12.7304 0-24.9394 5.057-33.9411 14.059C53.0571 135.061 48 147.27 48 160v256zM272 64c0-4.2435 1.686-8.3131 4.686-11.3137C279.687 49.6857 283.757 48 288 48h160c4.243 0 8.313 1.6857 11.314 4.6863C462.314 55.6869 464 59.7565 464 64v160c0 4.243-1.686 8.313-4.686 11.314-3.001 3-7.071 4.686-11.314 4.686s-8.313-1.686-11.314-4.686c-3-3.001-4.686-7.071-4.686-11.314V80H288c-4.243 0-8.313-1.6857-11.314-4.6863C273.686 72.3131 272 68.2435 272 64z">
                                        </path>
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M459.327 52.6576c1.49 1.4863 2.673 3.2519 3.479 5.1958.807 1.9438 1.222 4.0277 1.222 6.1322 0 2.1046-.415 4.1885-1.222 6.1323-.806 1.9439-1.989 3.7095-3.479 5.1957l-256 256.0004c-1.487 1.487-3.253 2.667-5.197 3.472-1.944.805-4.027 1.22-6.131 1.22-2.103 0-4.187-.415-6.13-1.22-1.944-.805-3.71-1.985-5.198-3.472-1.487-1.488-2.667-3.254-3.472-5.198-.805-1.943-1.22-4.027-1.22-6.13 0-2.104.415-4.187 1.22-6.131.805-1.944 1.985-3.71 3.472-5.197l256-256.0004c1.487-1.49 3.252-2.6722 5.196-3.4788s4.028-1.2218 6.132-1.2218c2.105 0 4.189.4152 6.133 1.2218s3.709 1.9888 5.195 3.4788z">
                                        </path>
                                    </svg></i></a></li>
                    </ul>
                </nav>
                <div class="dash-app-view__side-banner">
                    <div class="dash-banner mt-auto mb-8 border-0"><a
                            href="https://elementor.com/blog/introducing-elementor-ai/" target="_blank"
                            rel="noopener noreferrer" data-gac="Internal Campaign Elements"
                            data-gaa="my account - side menu banner" data-gal="cloud"
                            data-gal2="promotion - elementor ai release" data-gal3="ai release blog">
                            <div class="dash-banner__img"><img
                                    src="https://my.elementor.com/wp-content/uploads/sites/2/2023/05/AI_Hosting-users_256_256_Sidebar.png"
                                    class="d-none dash-banner__img-src"><img
                                    src="https://my.elementor.com/wp-content/uploads/sites/2/2023/05/AI_Hosting-users_256_256_Sidebar.png"
                                    alt="marketing banner" class="dash-banner__img-src"></div>
                        </a></div>
                </div> */}