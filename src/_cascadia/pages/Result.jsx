import { useSelector } from 'react-redux';

import Col, { colAlign, colType, colWidth } from '../../common/components/Result/Col';
import Row, { rowHeight, rowType } from '../../common/components/Result/Row';
import TableBody from '../../common/components/Result/TableBody';
import SvgWrapper from '../../common/components/SvgWrapper';
import Ellipsis from '../../common/components/Ellipsis';
import Table from '../../common/components/Result/Table';

import criteria from '../mapping/criteria';
import { getAll, getPlayerList } from '../redux/selectors';
import { calculateHabitatBonus } from '../helpers';

const Result = () => {
  const playerList = useSelector(getPlayerList);
  const score = useSelector(getAll);

  const rows = [];
  const totals = [0, 0, 0, 0];

  Object.keys(criteria).forEach((key) => {
    const currentCriteria = criteria[key];
    const { IconCmp } = currentCriteria;
    let habitatBonus = [];

    if (currentCriteria.habitat) {
      habitatBonus = calculateHabitatBonus(score[currentCriteria.id], playerList.length);
    }

    rows.push(
      <Row key={key} height={rowHeight.LG}>
        <Col type={colType.CRITERIA} width={colWidth.SM} align={colAlign.CENTER} contentIcon>
          <SvgWrapper>
            <IconCmp />
          </SvgWrapper>
        </Col>
        {playerList.map((player, index) => {
          const storedCriteriaScore = parseInt(score[currentCriteria.id][index], 10) || 0;
          let displayScore = `${storedCriteriaScore}`;

          totals[index] += storedCriteriaScore;

          if (currentCriteria.habitat) {
            totals[index] += habitatBonus[index];
            displayScore = `${displayScore}/${habitatBonus[index]}`;
          }

          return (
            <Col key={`${key}_${index}`}>
              {displayScore}
            </Col>
          );
        })}
      </Row>
    );
  });

  return (
    <Table>
      <Row type={rowType.HEADER}>
        <Col width={colWidth.SM} />
        {playerList.map((player, index) => (
          <Col key={index}>
            <Ellipsis>{player}</Ellipsis>
          </Col>
        ))}
      </Row>
      <TableBody>
        {rows}
      </TableBody>
      <Row type={rowType.FOOTER}>
        <Col width={colWidth.SM} align={colAlign.LEFT}>Total</Col>
        {playerList.map((player, index) => (
          <Col key={index}>
            {totals[index] || 0}
          </Col>
        ))}
      </Row>
    </Table>
  );
};

export default Result;
