import { useSelector } from 'react-redux';

import Col, { colAlign, colType, colWidth } from '../../common/components/Result/Col';
import Row, { rowHeight, rowType } from '../../common/components/Result/Row';
import SvgWrapper from '../../common/components/SvgWrapper';
import TableBody from '../../common/components/Result/TableBody';
import Table from '../../common/components/Result/Table';

import criteria from '../mapping/criteria';
import { getAll, getPlayerList } from '../redux/selectors';

const Result = () => {
  const playerList = useSelector(getPlayerList);
  const score = useSelector(getAll);

  const rows = [];
  const totals = [0, 0, 0, 0];

  Object.keys(criteria).forEach((key) => {
    const translator = criteria[key]?.translator;
    const IconCmp = criteria[key].IconCmp;

    rows.push(
      <Row key={key} height={rowHeight.LG}>
        <Col type={colType.CRITERIA} width={colWidth.SM} align={colAlign.CENTER} contentIcon>
          <SvgWrapper>
            <IconCmp />
          </SvgWrapper>
        </Col>
        {playerList.map((player, index) => {
          let storedPlayerCriteriaScore = score[criteria[key].key][index];
          let finalPlayerCriteriaScore = 0;

          if (typeof storedPlayerCriteriaScore === 'string') {
            storedPlayerCriteriaScore = parseInt(storedPlayerCriteriaScore, 10);
          }

          if (translator) {
            finalPlayerCriteriaScore = translator(storedPlayerCriteriaScore);
          } else if (storedPlayerCriteriaScore) {
            finalPlayerCriteriaScore += storedPlayerCriteriaScore;
          }

          totals[index] += finalPlayerCriteriaScore;

          return (
            <Col key={`${key}_${index}`}>
              {finalPlayerCriteriaScore}
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
          <Col key={index} type={colType.VALUE}>
            <span className="text-ellipsis whitespace-nowrap overflow-hidden">{player}</span>
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
