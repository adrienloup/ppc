import { useState } from 'react';
import { classNames } from '@/src/shared/utils/classNames.ts';
import { ExpandComponent } from '@/src/components/common/expand/expand.component.tsx';
import type { Expands } from '@/src/components/common/expands/expands.type.ts';
import styles from '@/src/components/common/expands/expands.module.scss';

export const ExpandsComponent = ({ expands, className, accordion = false }: Expands) => {
  const [indexes, setIndexes] = useState<number[]>([]);

  const toggle = (index: number) =>
    setIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : accordion ? [index] : [...prev, index]
    );

  return (
    <div className={classNames([styles.expand, className])}>
      {expands.map((expend, index) => (
        <ExpandComponent
          key={index}
          title={expend.title}
          content={expend.content}
          open={indexes.includes(index)}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};
