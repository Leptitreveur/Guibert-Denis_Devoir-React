import { PropTypes } from 'prop-types';

// import './SectionTitle.scss'

export function SectionTitle({ title }) {
  return (
    <div className="d-flex flex-column align-items-start justify-content-center w-100 mb-5"> {/*app-section--title__container*/}
      <h3 className="fw-bold pb-3">{title}</h3>
      <span className="d-block w-100 bg-primary m-0 p-0" style={{ height: '4px' }} />
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
