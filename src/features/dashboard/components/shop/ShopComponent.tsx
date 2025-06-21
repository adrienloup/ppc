import { classNames } from '@/src/common/shared/utils/classNames.ts';
import styles from '@/src/features/dashboard/components/shop/ShopComponent.module.scss';

export const ShopComponent = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={classNames([styles.shop, isActive ? styles.active : ''])}>
      <div>
        <div>screen 3 top</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 a card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 b card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 c card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 d card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 e card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 f card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 g card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 h card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 i card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 j card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 k card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 l card</div>
        <div style={{ height: '200px', border: '1px solid red' }}>screen 3 m card</div>
        <div>screen 3 bottom</div>
      </div>
    </div>
  );
};
