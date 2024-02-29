import PropTypes from 'prop-types';

import styles from 'components/BadgeEmoji/BadgeEmoji.module.scss';

function BadgeEmoji({ emoji, count }) {
  // className
  const badgeEmojiClasses = styles.badgeEmoji;
  const emojiClasses = styles.emoji;
  const countClasses = styles.count;

  return (
    <div className={badgeEmojiClasses}>
      <p className={emojiClasses}>{emoji}</p>
      <p className={countClasses}>{count}</p>
    </div>
  );
}

BadgeEmoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default BadgeEmoji;
