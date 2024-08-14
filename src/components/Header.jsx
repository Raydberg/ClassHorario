import PropTypes from 'prop-types';

export const Header = ({ title, themeToggle, currentDate }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-4 bg-gray-100 dark:bg-gray-800">
      <div className="text-lg md:text-3xl font-bold">{title}</div>
      <div className="flex flex-row items-center space-x-4">
        <div className="text-lg md:text-lg">{currentDate}</div>
        {themeToggle}
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  themeToggle: PropTypes.element.isRequired,
  currentDate: PropTypes.string.isRequired,
};