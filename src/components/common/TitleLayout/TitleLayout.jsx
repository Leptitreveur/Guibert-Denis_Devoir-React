import { PropTypes } from 'prop-types';

export function TitleLayout({ title, description }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-0 mb-5 text-center">
      <h1 className="fw-bold">{title}</h1>
      {description && <p className="mb-4">{description}</p>}
      <span className="app-h-6px app-w-30vw m-0 p-0 bg-primary" />
    </div>
  );
}
TitleLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
