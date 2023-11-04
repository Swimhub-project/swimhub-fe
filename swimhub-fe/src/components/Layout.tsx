import  { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <Header />
        <div className='layout_container'>{children}</div>
        </>
)
}
export default Layout;

