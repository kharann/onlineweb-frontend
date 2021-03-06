import { DateTime } from 'luxon';
import React from 'react';
import { IMark } from '../../../models/Penalty';
import style from './penalties.less';
import Penalty from './Penalty';

class Mark extends Penalty<IMark> {
  public render() {
    const { penalty } = this.props;
    const { collapsed } = this.state;
    const expiration = DateTime.fromISO(penalty.expiration_date);
    const added = DateTime.fromISO(penalty.added_date);
    const completion = this.getPenaltyCompletion(penalty);
    const completionColor = this.getCompletionColor(completion);
    return (
      <div className={style.penalty} onClick={() => this.toggleCollapse()} tabIndex={0}>
        <div className={style.penaltyTitle}>
          <h3>{penalty.title}</h3>
          <span>{added.toFormat('d MMMM y')}</span>
        </div>
        {!collapsed && (
          <div className={style.penaltyContent}>
            <p>{penalty.description}</p>
            <p>
              <b>Katogori: </b>
              {penalty.category}
            </p>
            <p>
              <b>Utløpsdato: </b>
              {expiration.toFormat('d MMMM y')}
            </p>
          </div>
        )}
        <div className={style.progressBar} style={{ width: completion + '%', backgroundColor: completionColor }} />
      </div>
    );
  }
}

export default Mark;
