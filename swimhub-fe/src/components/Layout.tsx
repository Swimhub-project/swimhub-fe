import  { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout_container'>
        <Header />
        <div className='children_wrapper'>{children}</div>
        </div>
)
}
export default Layout;

