import { IGroup } from 'core/models/Group';
import React, { Component } from 'react';
import { getGroups } from '../../api/groups';
import { ISearchFilter } from '../../models/Search';
import DoubleSlider from './DoubleSlider';
import Dropdown from './Dropdown';
import style from './search.less';

export interface IProps extends ISearchFilter {
  setName: (s: string) => boolean;
  setGroup: (g: IGroup) => boolean;
  setYear: (y: [number, number]) => boolean;
}

export interface IState {
  groups: IGroup[];
}

class Searchbar extends Component<IProps, IState> {
  public state: IState = {
    groups: [],
  };

  public async componentDidMount() {
    const groups = await getGroups();
    this.setState({ groups });
  }

  public render() {
    const { name, group, year, setName, setGroup, setYear } = this.props;
    const { groups } = this.state;
    return (
      <form className={style.grid}>
        <input
          placeholder="Søk"
          className={style.searchInput}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Dropdown selected={group} onClick={(g: IGroup) => setGroup(g)} groups={groups} />
        <DoubleSlider range={year || [1, 6]} onChange={(range) => setYear(range)} />
      </form>
    );
  }
}

export default Searchbar;
