import './MyTitle.scss';

const MyTitle = ({ children, newClass }) => {
	return <h4 className={`title ${newClass}`}>{children}</h4>;
};
export default MyTitle;
