import './MyButton.scss';

const MyButton = ({ children, newClass, goTo }) => {
	return (
		<button className={`btn ${newClass}`}>
			<a href={goTo}>{children}</a>
		</button>
	);
};
export default MyButton;
