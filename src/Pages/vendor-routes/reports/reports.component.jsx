import { PrimaryHeading, SecondaryHeading, TertiaryHeading } from "../../../abstracts/headings"
import { Search } from "../../../abstracts/search"
import { Meals } from "../../../Components/meals-list/meals.component"

import {
    ListHeader,
    ListTitleContainer,
    ListTitle,
    MealsListContainer,
    ReportsContainer,
    ReportsDetail,
    ItemImg,
    DetailItems,
    ItemContainer,
    ItemKey,
    ItemValue,
    FooterContainer,
    Tag,
    TagsContainer
} from "./reports.styles"
import { useContext } from "react"
import { FoodContext } from "../../../contexts/food-context"
import { useState } from "react"
import { EditButton } from "../../../abstracts/buttons"
import { Fragment } from "react"
export const Reports = () => {
    const { meals, selectedMeal } = useContext(FoodContext)
    const [search, setSearch] = useState('')

    const filteredMeals = meals.filter(meal => {
        return meal.name.toLowerCase().includes(search.toLowerCase())
    })
    const { imageURL, name, description, tags, sizes } = selectedMeal

    return (
        <ReportsContainer>
            <MealsListContainer>
                <ListHeader>
                    <PrimaryHeading>Meals List</PrimaryHeading>
                    <Search placeholder="Search" type={`text`} value={search} onChange={(e) => setSearch(e.target.value)} />
                </ListHeader>
                <ListTitleContainer>
                    <ListTitle>Name</ListTitle>
                    <ListTitle>Info</ListTitle>
                    <ListTitle>Price</ListTitle>
                    <ListTitle>Rating</ListTitle>
                    <ListTitle>Status</ListTitle>
                </ListTitleContainer>
                <Meals meals={filteredMeals} />
            </MealsListContainer>
            {Object.keys(selectedMeal).length ?
                (
                    <ReportsDetail>
                        <ItemImg src={`http://localhost:4020/images/${imageURL[0]}`} />
                        <SecondaryHeading>{name.toUpperCase()}</SecondaryHeading>
                        <TertiaryHeading>{description}</TertiaryHeading>
                        <TagsContainer>
                            {tags.map((tag) => <Tag>{tag.toUpperCase()}</Tag>)}
                        </TagsContainer>
                        <DetailItems>
                            <SecondaryHeading>Categories</SecondaryHeading>
                            {sizes.map(size => (
                                <ItemContainer>
                                    <ItemKey>{`${size.size.toUpperCase()}`}</ItemKey>
                                    <ItemValue>{`${size.price} $`}</ItemValue>
                                </ItemContainer>
                            ))}
                            {/* <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer> */}
                        </DetailItems>
                        <FooterContainer>
                            <EditButton>Edit</EditButton>
                        </FooterContainer>
                    </ReportsDetail>
                )
                : (
                    <ReportsDetail>
                        Please select an item
                    </ReportsDetail>
                )

            }

        </ReportsContainer>
    )
}