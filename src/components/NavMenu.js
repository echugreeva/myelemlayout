import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    label: (<div  style={{display: 'flex'}}>
                <UserOutlined/>
                <div >
                    <div>Elena Chugreeva</div>
                    <div> elenac@elementor.com</div>
                </div>

            </div>
        
        
    ),
    key: '0',
    disabled: true
  },
  {
    type: 'divider',
  },
  {
    label: <a href="#">My Profile</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <div  style={{display: 'flex'}}>
    <LogoutOutlined/>
    <div >
        Log Out
    </div>

</div>,
    key: '3',
  },
];


const DropdownStyle= {
  
   color: '#d5d8dc',
   
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
   
    marginLeft: 'auto',


}

const NavMenu = () => {
    return (
        <Dropdown  menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div style={{display: 'flex'}}>
            <UserOutlined/> 
            <div>Hi, Elena!</div>
        </div>
       
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    )
}

export default NavMenu

{/* <div aria-labelledby="profile-dropdown" data-bs-popper="static"
class="dropdown-menu show dropdown-menu-end">
<div class="d-flex p-3 align-items-center"><img height="30px" width="30px"
        src="https://secure.gravatar.com/avatar/b1a478a7f6d79ab1f648feb1f34a98be?s=96&amp;d=mm&amp;r=g"
        class="mr-2 rounded-circle">
    <div class="text-smaller text-system w-ch-25">
        <div>Elena Chugreeva</div>
        <div class="text-system-light text-truncate cursor-default" data-hj-suppress="true">
            elenac@elementor.com</div>
    </div>
</div>
<hr class="dropdown-divider" role="separator"><a data-gac="My Account"
    data-gaa="Cross App Elements" data-gal="Profile Menu" data-gal2="Click: View Profile"
    data-rr-ui-dropdown-item="" class="text-system-dark text-smaller dropdown-item"
    href="/user-profile/">My Profile</a>
<hr class="dropdown-divider" role="separator"><a data-gac="My Account"
    data-gaa="Cross App Elements" data-gal="Profile Menu" data-gal2="Click: Log Out"
    href="https://my.elementor.com/logout/?redirect_to&amp;_wpnonce=f0f58167a3"
    aria-selected="false" data-rr-ui-dropdown-item=""
    class="text-smaller text-system-dark dropdown-item"><i
        class="icon icon-switch-off icon-14   "><svg class="icon-src " viewBox="0 0 512 512">
            <path fill="currentColor" fill-rule="evenodd"
                d="M389.3845 47.035c70.5015 44.6983 117.3333 123.4285 117.3333 213.0285 0 138.9714-112.5587 251.6317-251.4286 251.9371C116.6226 512.3048 3.048 399.2381 2.8446 260.4698 2.7432 170.6667 49.575 91.7333 120.1781 47.035c5.892-3.7587 13.7143-1.8286 17.1683 4.2667l3.9619 7.1111c3.1492 5.6889 1.3206 12.8-4.1651 16.254-61.2572 39.111-101.7905 107.784-101.7905 185.3968 0 121.8032 98.8445 219.4286 219.4286 219.4286 121.8032 0 219.4286-98.8445 219.4286-219.4286 0-78.2222-40.7366-146.4889-101.8921-185.2952-5.4857-3.454-7.3143-10.6667-4.165-16.254l3.9618-7.1111c3.454-6.1969 11.3778-8.0254 17.2699-4.3683zM271.0353 280.381V12.1905C271.0353 5.4857 265.5495 0 258.8448 0h-8.127c-6.7048 0-12.1905 5.4857-12.1905 12.1905V280.381c0 6.7047 5.4857 12.1904 12.1905 12.1904h8.127c6.7047 0 12.1904-5.4857 12.1904-12.1904z">
            </path>
        </svg></i><span>Log Out</span></a>
</div> */}