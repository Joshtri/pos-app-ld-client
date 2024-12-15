import React from 'react';
import { Parfum } from '../../types/parfum';

interface ParfumItemProps {
  parfum: Parfum;
  onEdit: (parfum: Parfum) => void;
  onDelete: (id: string) => void;
}

const ParfumItem: React.FC<ParfumItemProps> = ({ parfum, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{parfum.nama}</td>
      <td>
        <button onClick={() => onEdit(parfum)}>Edit</button>
        <button onClick={() => onDelete(parfum.id)}>Hapus</button>
      </td>
    </tr>
  );
};

export default ParfumItem;
