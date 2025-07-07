import { PropTypes } from 'prop-types';

// import './Presentation.scss';
//* Component showned to present all pages but HomePage and App =================================
export function Presentation({ title, description }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5 text-center app-w-85vw">
      <h1 className="fw-bold">{title}</h1>
      {description && <p className="mb-4">{description}</p>}
      <span className="app-h-6px app-w-30vw m-0 p-0 bg-primary"/>
    </div>
  );
}
Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
