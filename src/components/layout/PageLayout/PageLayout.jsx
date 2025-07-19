import { PropTypes } from 'prop-types';

export function PageLayout({ beforeContent, classNameLv1 = '', classNameLv2 = '', children }) {
  return (
    <>
      {beforeContent}
        <div className={`container d-flex justify-content-center w-auto my-4 ${classNameLv1}`}>
          <div className={`row justify-content-center app-w-lg-80vw ${classNameLv2}`}>
            {children}
          </div>
        </div>
    </>
  );
}
PageLayout.propTypes = {
  beforeContent: PropTypes.node,
  classNameLv1: PropTypes.string,
  classNameLv2: PropTypes.string,
  children: PropTypes.node.isRequired,
};
