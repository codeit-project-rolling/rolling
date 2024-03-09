import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'components/ServiceSection/ServiceSection.module.scss';

function ServiceSection({ service }) {
  const { pointNum, title, detail, imageSrc, imageMobileSrc, layout } = service;
  const pointText = `Point. ${pointNum}`;

  const layoutStyle = layout === 'even' ? styles.evenLayout : layout === 'odd' ? styles.oddLayout : '';
  const sectionClasses = classNames(styles.serviceSection, layoutStyle);

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
  // eslint-disable-next-line react/forbid-prop-types
  service: PropTypes.object.isRequired,
};

export default ServiceSection;
