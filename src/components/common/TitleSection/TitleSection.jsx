import { PropTypes } from 'prop-types';

// import './TitleSection.scss'

export function TitleSection({ title }) {
  return (
    <div className="d-flex flex-column align-items-start justify-content-center w-100 mb-5">
      {' '}
      {/*app-section--title__container*/}
      <h2 className="fw-bold pb-2">{title}</h2>
      <span className="d-block w-100 app-h-4px bg-primary m-0 p-0" />
    </div>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};
