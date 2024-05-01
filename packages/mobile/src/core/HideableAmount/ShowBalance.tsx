import React, { useCallback } from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { usePrivacyStore } from '$store/zustand/privacy/usePrivacyStore';
import { Steezy } from '$styles';
import { Pressable, View } from '$uikit';
import { Haptics, isAndroid } from '$utils';
import { DarkTheme } from '$styled';
import { Icon, Text } from '@tonkeeper/uikit';
import { DangerLevel } from '@tonkeeper/shared/hooks';
import { useNavigation } from '@tonkeeper/router';
import { SettingsStackRouteNames } from '$navigation';

const TouchableComponent = isAndroid ? Pressable : TouchableHighlight;

const getColorByDangerLevel = (
  dangerLevel: DangerLevel,
): undefined | 'accentOrange' | 'accentRed' => {
  switch (dangerLevel) {
    case DangerLevel.Normal:
      return undefined;
    case DangerLevel.Medium:
      return 'accentOrange';
    case DangerLevel.High:
      return 'accentRed';
  }
};

export const ShowBalance: React.FC<{ amount: string; dangerLevel: DangerLevel }> = ({
  amount,
  dangerLevel,
}) => {
  const hideAmounts = usePrivacyStore((state) => state.actions.toggleHiddenAmounts);
  const isHidden = usePrivacyStore((state) => state.hiddenAmounts);
  const nav = useNavigation();

  const handleToggleHideAmounts = useCallback(() => {
    hideAmounts();
    Haptics.impactHeavy();
  }, [hideAmounts]);

  const handleNavigateToBackup = () => nav.navigate(SettingsStackRouteNames.Backup);

  return (
    <View style={styles.container}>
      {isHidden ? (
        <View style={styles.starsContainer}>
          <TouchableComponent
            style={styles.touchable.static}
            underlayColor={DarkTheme.colors.backgroundHighlighted}
            onPress={handleToggleHideAmounts}
          >
            <Text type="num2" style={styles.stars.static}>
              {'* * *'}
            </Text>
          </TouchableComponent>
        </View>
      ) : (
        <TouchableOpacity activeOpacity={0.6} onPress={handleToggleHideAmounts}>
          <Text color={getColorByDangerLevel(dangerLevel)} type="num3">
            {amount}
          </Text>
        </TouchableOpacity>
      )}
      {dangerLevel !== DangerLevel.Normal && (
        <TouchableOpacity
          onPress={handleNavigateToBackup}
          activeOpacity={0.6}
          hitSlop={{ right: 20 }}
          style={styles.dangerButton.static}
        >
          <Icon
            name={'ic-information-circle-24'}
            color={getColorByDangerLevel(dangerLevel)}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = Steezy.create(({ colors }) => ({
  container: {
    flexDirection: 'row',
    height: 54,
    alignItems: 'center',
    gap: 8,
  },
  starsContainer: {
    height: 40,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 100,
  },
  touchable: {
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  stars: {
    paddingTop: 8,
  },
  dangerButton: {
    paddingTop: 21,
    paddingBottom: 11,
  },
}));
