import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import StayConnectedSection from './components/StayConnectedSection';
import BenefitsSection from './components/BenefitsSection';
import FilterSortSection from './components/FilterSortSection';
import { FurnitureListState } from '../../utils/mockData';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const CollectionPage = () => {

  const furnitureList : FurnitureListState[] = useSelector((state:RootState)=> state.furniture.displayedFurniture);
  console.log(furnitureList);
  return (
    <Box>
      <HeroSection />
      <FilterSortSection/>
      <BenefitsSection />
      <StayConnectedSection />
    </Box>
  );
};

export default CollectionPage;
