'use client'
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Thanks.module.css';
import { MainButton } from '../Buttons/MainButton/MainButton';

const Thanks = ({ text, onClose, sectionId }: { text?: string, onClose: () => void, sectionId: string  }) => {
  const [portalRoot, setPortalRoot] = useState<Element | null>(null);

  useEffect(() => {
    const root = document.getElementById(`portal-root-${sectionId}`);
    setPortalRoot(root);
  }, [sectionId]);

  return portalRoot
    ? createPortal(
        <div className={css.ThanksPortal}>
          <div className={css.thanks}>
            <p className={css.thanks__title}>Спасибо, что выбираете нас!</p>
            <p>{text}</p>
            <MainButton handler={() => onClose()} text={'Закрыть'} width={260} color="var(--MainButtonColor)" />
          </div>
        </div>,
        portalRoot
      )
    : null;
};

export default Thanks;