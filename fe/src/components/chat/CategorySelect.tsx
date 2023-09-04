import React, { useState } from 'react';
import { Stack } from '@mui/material';
import CategoryChip from 'components/chat/CategoryChip'; // 경로는 상황에 맞게 수정

interface CategorySelectProps {
  onSelectCategories: (categories: string[]) => void;
}

function CategorySelect({ onSelectCategories }: CategorySelectProps) {
  const categories = ['짝사랑', '썸', '연애', '이별', '재회'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategorySelect = (category: string) => {
    const isSelected = selectedCategories.includes(category);
    const updatedCategories = isSelected
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    // 선택된 카테고리를 부모 컴포넌트에게 전달
    onSelectCategories(updatedCategories);
  };

  return (
    <div>
      <Stack direction="row" spacing={1}>
        {categories.map((category) => (
          <CategoryChip
            key={category}
            label={category}
            selected={selectedCategories.includes(category)}
            onClick={() => handleCategorySelect(category)}
          />
        ))}
      </Stack>
    </div>
  );
}

export default CategorySelect;
