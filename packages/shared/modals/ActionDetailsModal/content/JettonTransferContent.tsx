import { JettonTransferAction, CustomAccountEvent } from '@tonkeeper/core/src/TonAPI';
import { DetailedInfoConatiner } from '../components/DetailedInfoConatiner';
import { DetailedActionTime } from '../components/DetailedActionTime';
import { AddressListItem } from '../components/AddressListItem';
import { DetailedAmount } from '../components/DetailedAmount';
import { DetailedHeader } from '../components/DetailedHeader';
import { ExtraListItem } from '../components/ExtraListItem';
import { List, View, copyText } from '@tonkeeper/uikit';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';
import { t } from '../../../i18n';
import { memo } from 'react';

interface JettonTransferContentProps {
  event: CustomAccountEvent;
  action: JettonTransferAction;
}

export const JettonTransferContent = memo<JettonTransferContentProps>((props) => {
  const { action, event } = props;

  const source = { uri: action.jetton?.image };

  return (
    <View>
      <DetailedInfoConatiner>
        <DetailedHeader isScam={event.is_scam}>
          <FastImage style={styles.jettonImage} resizeMode="cover" source={source} />
        </DetailedHeader>
        <DetailedAmount
          decimals={action.jetton.decimals}
          destination={event.destination}
          symbol={action.jetton.symbol}
          amount={action.amount}
        />
        <DetailedActionTime
          destination={event.destination}
          timestamp={event.timestamp}
        />
      </DetailedInfoConatiner>
      <List>
        <AddressListItem
          // hideName={event.is_scam}
          destination={event.destination}
          recipient={action.recipient}
          sender={action.sender}
        />
        <ExtraListItem extra={event.extra} />
        {!!action.comment && (
          <List.Item
            titleType="secondary"
            title={t('transactionDetails.comment')}
            onPress={copyText(action.comment)}
            value={action.comment}
            valueMultiline
          />
        )}
      </List>
    </View>
  );
});

const styles = StyleSheet.create({
  jettonImage: {
    width: 96,
    height: 96,
    borderRadius: 96 / 2,
  },
});
