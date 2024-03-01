import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'components/ServiceSection/ServiceSection.module.scss';

function ServiceSection({ pointNum, title, detail, imageSrc, imageMobileSrc, reverse }) {
  const pointText = `Point. ${pointNum}`;

  const sectionClasses = classNames(styles.serviceSection, reverse ? styles.reverseLayout : '');

  return (
    <section className={sectionClasses}>
      <div className={styles.textContainer}>
        <div className={styles.point}>{pointText}</div>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.detail}>{detail}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageSrc} alt={`service-${pointNum}`} />
        <img className={styles.imageMobile} src={imageMobileSrc} alt={`service-${pointNum}`} />
      </div>
    </section>
  );
}

ServiceSection.propTypes = {
  pointNum: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  detail: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageMobileSrc: PropTypes.string,
  reverse: PropTypes.bool,
};

ServiceSection.defaultProps = {
  reverse: false,
  imageMobileSrc: '',
};

export default ServiceSection;
