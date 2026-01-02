import { type FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { NoticeContext } from '@/src/domains/notice/interface/notice.context.ts';
import { NoticeComponent } from '@/src/domains/notice/ui/notice/notice.component.tsx';
import { NoticesComponent } from '@/src/domains/notice/ui/notices/notices.component.tsx';
import type { NoticeType } from '@/src/domains/notice/ui/notice/notice.type.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const NoticeProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const [notices, setNotices] = useState<NoticeType[]>([]);

  const addNotice = (notice: NoticeType) => {
    const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36);
    setNotices((prev) => [{ ...notice, id }, ...prev]);
  };

  const removeNotice = (id: string) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
  };

  return (
    <NoticeContext.Provider value={addNotice}>
      {children}
      {notices.length
        ? createPortal(
            <NoticesComponent>
              {notices.map((notice: NoticeType) => (
                <NoticeComponent
                  key={notice.id}
                  {...notice}
                  remove={() => removeNotice(notice.id!)}
                />
              ))}
            </NoticesComponent>,
            document.getElementById('_app_ppc03_1')!
          )
        : null}
    </NoticeContext.Provider>
  );
};
