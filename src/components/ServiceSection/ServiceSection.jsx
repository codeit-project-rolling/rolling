import PropTypes from 'prop-types';

import styles from 'components/ServiceSection/ServiceSection.module.scss';

function ServiceSection({ pointNum, title, detail, imageSrc }) {
  const pointText = `Point. ${pointNum}`;

  return (
    <section className={styles.serviceSection}>
      <div className={styles.textContainer}>
        <div className={styles.point}>{pointText}</div>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.detail}>{detail}</p>
        </div>
      </div>
      <img className={styles.image} src={imageSrc} alt={`service-${pointNum}`} />
    </section>
  );
}

ServiceSection.propTypes = {
  pointNum: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ServiceSection;
