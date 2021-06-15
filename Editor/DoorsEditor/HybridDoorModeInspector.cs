﻿using Edgar.Geometry;
using UnityEditor;
using UnityEngine;

namespace Edgar.Unity.Editor
{
    public class HybridDoorModeInspector : ManualDoorModeInspectorBase
    {
        public HybridDoorModeInspector(SerializedObject serializedObject, Doors doors, SerializedProperty serializedProperty) : base(serializedObject, doors, serializedProperty)
        {
        }

        protected override void DrawAllDoors()
        {
            var gameObject = doors.transform.gameObject;
            var grid = gameObject.GetComponentInChildren<Grid>();

            foreach (var doorLine in doors.HybridDoorModeData.DoorLines)
            {
                DoorsInspectorUtils.DrawDoorLine(doorLine, grid);
            }
        }

        protected override void RemoveDoor(Vector3Int position)
        {
            for (int i = doors.HybridDoorModeData.DoorLines.Count - 1; i >= 0; i--)
            {
                var door = doors.HybridDoorModeData.DoorLines[i];
                var orthogonalLine = new OrthogonalLine(door.From, door.To);

                if (orthogonalLine.Contains(position) != -1)
                {
                    Undo.RecordObject(doors, "Deleted door position");
                    doors.HybridDoorModeData.DoorLines.RemoveAt(i);
                    EditorUtility.SetDirty(doors);
                }
            }
        }

        protected override void DrawPreview(Vector3Int from, Vector3Int to)
        {
            var gameObject = doors.transform.gameObject;
            var grid = gameObject.GetComponentInChildren<Grid>();
            var length = doors.HybridDoorModeData.DefaultLength;
            var doorLine = new DoorLine()
            {
                From = from,
                To = to,
                Length = length,
            };

            DoorsInspectorUtils.DrawDoorLine(doorLine, grid);
        }

        protected override void AddDoor(Vector3Int from, Vector3Int to)
        {
            var length = doors.HybridDoorModeData.DefaultLength;
            var doorLine = new DoorLine()
            {
                From = from,
                To = to,
                Length = length,
            };
            var line = new OrthogonalLineGrid2D(from.ToCustomIntVector2(), to.ToCustomIntVector2());

            if (line.Length >= length - 1)
            {
                Undo.RecordObject(doors, "Added door positions");

                doors.HybridDoorModeData.DoorLines.Add(doorLine);

                EditorUtility.SetDirty(doors);
            }
        }

        protected override void DeleteAllDoors()
        {
            Undo.RecordObject(doors, "Delete all door positions");

            doors.HybridDoorModeData.DoorLines.Clear();

            EditorUtility.SetDirty(doors);
        }

        protected override void ShowAdditionalFields()
        {
            EditorGUILayout.PropertyField(serializedProperty.FindPropertyRelative(nameof(HybridDoorModeData.DefaultLength)), new GUIContent("Door length"));
        }
    }
}