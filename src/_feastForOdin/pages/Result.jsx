import { useSelector } from 'react-redux';

import Table from '../../common/components/Result/Table';
import TableBody from '../../common/components/Result/TableBody';
import Row, { rowHeight, rowType } from '../../common/components/Result/Row';
import Col, { colAlign, colType, colWidth } from '../../common/components/Result/Col';

import positiveCriteria from '../mapping/positiveCriteria';
import negativeCriteria from '../mapping/negativeCriteria';

import { mappingToScore } from '../helpers/translators';
import { getAll, getPlayerList } from '../redux/selectors';

const Result = () => {
  const playerList = useSelector(getPlayerList);
  const { positive, negative } = useSelector(getAll);

  const positiveSubtotal = [0, 0, 0, 0], negativeSubtotal = [0, 0, 0, 0];

  const positiveRows = Object.values(positiveCriteria).map(({ key, title, mapping, translator }) => (
    <Row key={`positive_${key}`} height={rowHeight.MD}>
      <Col type={colType.CRITERIA} width={colWidth.LG} align={colAlign.LEFT}>
        {title}
      </Col>
      {playerList.map((player, index) => {
        const storedPlayerCriteriaScore = positive[key][index];
        let criteriaScore = 0;

        if (translator) {
          criteriaScore = translator(storedPlayerCriteriaScore);
        } else if (mapping) {
          criteriaScore = mappingToScore(mapping, storedPlayerCriteriaScore);
        } else {
          criteriaScore += parseInt(storedPlayerCriteriaScore, 10);
        }

        positiveSubtotal[index] += criteriaScore;

        return (
          <Col key={`positive_${key}_${index}`} type={colType.VALUE}>
            {criteriaScore}
          </Col>
        );
      })}
    </Row>
  ));

  const negativeRows = Object.values(negativeCriteria).map(({ key, title, translator }) => (
    <Row key={`negative_${key}`} height={rowHeight.MD}>
      <Col type={colType.CRITERIA} width={colWidth.LG} align={colAlign.LEFT}>
        {title}
      </Col>
      {playerList.map((player, index) => {
        const storedPlayerCriteriaScore = negative[key][index];
        let criteriaScore = 0;

        if (translator) {
          criteriaScore = translator(storedPlayerCriteriaScore);
        } else {
          criteriaScore -= parseInt(storedPlayerCriteriaScore, 10);
        }

        negativeSubtotal[index] += criteriaScore;

        return (
          <Col key={`negative_${key}_${index}`} type={colType.VALUE}>
            {criteriaScore}
          </Col>
        );
      })}
    </Row>
  ));

  return (
    <Table>
      <Row type={rowType.HEADER}>
        <Col width={colWidth.LG} />
        {playerList.map((player, index) => (
          <Col key={`header_player_${index}`} type={colType.VALUE}>
            <span className="text-ellipsis whitespace-nowrap overflow-hidden">{player}</span>
          </Col>
        ))}
      </Row>
      <TableBody>
        {positiveRows}
        <Row type={rowType.SUBTOTAL} height={rowHeight.MD}>
          <Col type={colType.CRITERIA} width={colWidth.LG} align={colAlign.LEFT}>Subtotal positivo</Col>
          {playerList.map((player, index) => <Col key={`positive_subtotal_${index}`}>{positiveSubtotal[index]}</Col>)}
        </Row>
        {negativeRows}
        <Row type={rowType.SUBTOTAL} height={rowHeight.MD}>
          <Col type={colType.CRITERIA} width={colWidth.LG} align={colAlign.LEFT}>Subtotal negativo</Col>
          {playerList.map((player, index) => <Col key={`negative_subtotal_${index}`}>{negativeSubtotal[index]}</Col>)}
        </Row>
      </TableBody>
      <Row type={rowType.FOOTER}>
        <Col type={colType.VALUE} width={colWidth.LG} align={colAlign.LEFT}>Total</Col>
        {playerList.map((player, index) => (
          <Col key={`total_${index}`} type={colType.VALUE}>
            {positiveSubtotal[index] + negativeSubtotal[index] || 0}
          </Col>
        ))}
      </Row>
    </Table>
  );
};

export default Result;
