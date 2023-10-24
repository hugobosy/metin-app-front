import { Tile } from "@/components/base/tile/Tile";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import styles from "./Objective.module.scss";
import { FC, useEffect, useState } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { Button } from "@/components/base/button/Button";
import { ModalObjective } from "./ModalObjective/ModalObjective";
import { useAddObjectiveMutation } from "@/hooks/mutations/useAddObjective";
import { useSetCompleteObjective } from "@/hooks/mutations/useSetCompleteObjective";
import { useGetOneObjective } from "@/hooks/queries/useGetOneObjective";
import { useEditObjective } from "@/hooks/mutations/useEditObjective";
import classNames from "classnames";
import { useDeleteObjective } from "@/hooks/mutations/useDeleteObjective";
import { apiService } from "@/services";

export interface ObjectiveProps extends HomePageTemplateProps {}

export const Objective: FC<ObjectiveProps> = ({ objective, userId }) => {
  const t = useTranslations("Dashboard.objective");
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState<"normal" | "edit">("normal");
  const [objectiveId, setObjectiveId] = useState<string | null>(null);

  const { mutate: addObjective, isLoading: addObjectiveLoading } =
    useAddObjectiveMutation();
  const {
    mutate: setCompleteObjective,
    isLoading: setCompleteObjectiveLoading,
  } = useSetCompleteObjective();

  const { data: objectiveData, isLoading: objectiveLoading } =
    useGetOneObjective(objectiveId);

  const { mutate: editObjectiveMutate, isLoading: EditObjectiveLoading } =
    useEditObjective();

  const { mutate: deleteObjectiveMutate } = useDeleteObjective();

  useEffect(() => {
    setObjectiveId(!showModal ? null : objectiveId);
  }, [showModal]);

  function setComplete(id?: string) {
    setCompleteObjective(id || "");
    location.reload();
  }

  function editObjective(id?: string) {
    setTypeModal("edit");
    setObjectiveId(id || "");
    setShowModal(true);
  }

  function deleteObjective(id?: string) {
    deleteObjectiveMutate(id || "");
    location.reload();
  }

  return (
    <>
      <Tile className={styles.wrapper}>
        <div className={styles.header}>
          <Text
            tag="h2"
            text={t("my-objective")}
            color="white"
            fontFamily="montserrat"
            fontSize="xl"
            weight="500"
            className={styles["header-text"]}
          />
          <Button
            text={t("add-objective")}
            variant="base"
            className={styles["header-button"]}
            weight="700"
            fontFamily="montserrat"
            onClick={() => {
              setTypeModal("normal");
              setShowModal(true);
            }}
          />
        </div>
        {objective?.length ? (
          <ul className={styles.objective}>
            {objective?.map((obj, index) => (
              <li
                className={classNames(styles["objective-item"])}
                key={String(obj?.idUser) + index}>
                <Text
                  tag="span"
                  text={obj.objective}
                  color="gray"
                  fontFamily="inter"
                />
                <div className={styles.options}>
                  <Text
                    tag="span"
                    text={obj.amount + " Won"}
                    color="gray"
                    fontFamily="montserrat"
                    weight="700"
                  />
                  <Button
                    icon="Accept"
                    className={styles.option}
                    onClick={() => setComplete(obj.id)}
                  />
                  <Button
                    icon="Edit"
                    className={styles.option}
                    onClick={() => editObjective(obj.id)}
                  />
                  <Button
                    icon="Trash"
                    className={styles.option}
                    onClick={() => deleteObjective(obj?.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.notFound}>
            <Text
              tag="p"
              text={t("objective-not-found")}
              color="white"
              fontFamily="inter"
              fontSize="lg"
            />
          </div>
        )}
      </Tile>
      {!objectiveLoading && showModal && (
        <ModalObjective
          typeModal={typeModal}
          showModal={showModal}
          setShowModal={setShowModal}
          addObjective={addObjective}
          editObjective={editObjectiveMutate}
          userId={userId}
          objective={objectiveData}
        />
      )}
    </>
  );
};
