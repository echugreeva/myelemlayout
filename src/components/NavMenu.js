import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    label: (<div style={{ display: 'flex' }}>
      {/* <UserOutlined /> */}
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
    label: <div style={{ display: 'flex' }}>
      {/* <LogoutOutlined /> */}
      <div >
        Log Out
      </div>

    </div>,
    key: '3',
  },
];


const DropdownStyle = {

  fontFamily: 'DM Sans',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '14px',
lineHeight: '16px',
/* identical to box height, or 114% */


/* Gray/Selected/500 */

color: '#69727D',




  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',

  marginLeft: 'auto',


}

const NavMenu = () => {
  return (
    <Dropdown menu={{ items }} trigger={['click']} style={DropdownStyle}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div style={{ display: 'flex' }}>
            {/* <UserOutlined /> */}
            <div style={{color: '#69727D'}}>Hi, Elena!</div>
          </div>

          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default NavMenu

