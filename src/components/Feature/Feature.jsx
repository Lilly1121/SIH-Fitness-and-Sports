import React from 'react';
import featureclasses from './Feature.module.css';
import FeatureCard from '../UI/Featurecard';
import {motion} from 'framer-motion';
import {AiOutlineLike} from 'react-icons/ai';
import {BiCheckCircle} from 'react-icons/bi';
import {IconContext} from 'react-icons';
import {useMediaQuery} from '../../hooks/useMediaQuery';

const mainTitleAnimation = {
	hidden: {opacity: 0, y: -90},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const lineanimate = {
	initial: {
		width: 0,
	},
	start: {
		width: '100%',
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const cardParentAnimate = {
	visible: {
		transition: {
			staggerChildren: 0.8,
		},
	},
};

const cardChildAnimate = {
	hidden: {x: -200},
	visible: {
		x: 0,
		transition: {
			duration: 1.5,
			ease: [0.2, 0.65, 0.3, 0.9],
		},
	},
};

const Feature = () => {
	const isSmall = useMediaQuery('(350px < width < 766px)');
	const CustomMotionFeatureCard = motion(FeatureCard);

	const cardChildAnimate2 = isSmall
		? {
				hidden: {x: -600, opacity: 0},
				visible: {
					x: 0,
					opacity: 1,
					transition: {
						duration: 1.5,
						ease: [0.2, 0.65, 0.3, 0.9],
					},
				},
		  }
		: {
				hidden: {x: -200, opacity: 0},
				visible: {
					x: 0,
					opacity: 1,
					transition: {
						duration: 1.5,
						ease: [0.2, 0.65, 0.3, 0.9],
					},
				},
		  };

	return (
		<aside className={featureclasses['feature-wrapper']}>
			<div className={featureclasses['feature-info__div']}>
				<motion.p
					variants={mainTitleAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{once: true, amount: 0.8}}
					className={featureclasses.title}>
					Why Train With Us?
				</motion.p>
				<motion.hr
					variants={lineanimate}
					initial='initial'
					whileInView='start'
					viewport={{once: true, amount: 0.8}}
				/>
				<IconContext.Provider value={{size: '3em'}}>
					<motion.div
						variants={cardParentAnimate}
						animate='visible'
						className={featureclasses['feature-card__info']}>
						<CustomMotionFeatureCard
							variants={cardChildAnimate}
							initial='hidden'
							whileInView='visible'
							bgcolor='black'>
							<AiOutlineLike color='#f35508' />
							<h4>Top-Tier Facilities</h4>
							<p>
								Experience unmatched quality with our state-of-the-art gyms, equipped with the latest fitness technology and equipment. We ensure a premium workout environment that inspires and motivates you.
							</p>
						</CustomMotionFeatureCard>
						<CustomMotionFeatureCard
							variants={cardChildAnimate2}
							initial='hidden'
							whileInView='visible'>
							<BiCheckCircle />
							<h4>Certified Trainers</h4>
							<p>
								Our team of certified trainers provides expert guidance tailored to your individual goals. Whether you're a beginner or a seasoned athlete, we offer personalized training plans to help you achieve your fitness aspirations.
							</p>
						</CustomMotionFeatureCard>
					</motion.div>
				</IconContext.Provider>
			</div>
		</aside>
	);
};

export default Feature;
