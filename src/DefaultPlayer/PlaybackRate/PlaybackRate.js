import React from 'react';
import styles from './PlaybackRate.css';
import { PLAYBACK_RATES } from '../../video/constants';

export default ({ playbackRate, onClick, onItemClick, className, ariaLabel }) => {
    return (
        <div className={[
            styles.component,
            className
        ].join(' ')}>
            { playbackRate &&
                <div>
                    <button
                        type="button"
                        onClick={onClick}
                        aria-label={ariaLabel}
                        className={styles.button}>
                        {`${playbackRate.toFixed(1)}x`}
                    </button>
                    <ul className={styles.rateList}>
                        { PLAYBACK_RATES.map((rate) => (
                            <li
                                key={rate}
                                className={styles.rateItem}
                                value={rate}
                                onClick={onItemClick.bind(this, rate)}>
                                {`${rate.toFixed(1)}x`}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};
